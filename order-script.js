const WHATSAPP_NUMBER = "96898183175";

const menuRoot = document.getElementById("menuRoot");
const orderList = document.getElementById("orderList");
const itemsCount = document.getElementById("itemsCount");
const totalValue = document.getElementById("totalValue");
const notesInput = document.getElementById("notesInput");
const clearBtn = document.getElementById("clearBtn");
const whatsAppBtn = document.getElementById("whatsAppBtn");

const selected = new Map(); // key -> { name, price, qty }

function money(n) {
  return Number(n || 0).toFixed(2);
}

function keyOf(sectionTitle, itemName) {
  return `${sectionTitle}::${itemName}`;
}

function getItemByKey(k) {
  const [secTitle, itemName] = k.split("::");
  const sec = MENU.sections.find((s) => s.title === secTitle);
  if (!sec) return null;
  return sec.items.find((i) => i.name === itemName) || null;
}

function renderMenu() {
  let html = "";

  for (const sec of MENU.sections) {
    html += `
      <div class="section">
        <div class="section-head">
          <h3>${sec.title}</h3>
        </div>
        <div class="items">
          ${sec.items.map((it) => renderItem(sec.title, it)).join("")}
        </div>
      </div>
    `;
  }

  menuRoot.innerHTML = html;
  syncMenuUI();
}

function renderItem(sectionTitle, item) {
  const k = keyOf(sectionTitle, item.name);
  const isSelected = selected.has(k);
  const qty = isSelected ? selected.get(k).qty : 1;

  return `
    <div class="item" data-key="${k}">
      ${item.image ? `
        <div class="thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
      ` : `<div></div>`}

      <button class="pick ${isSelected ? "on" : ""}" type="button" aria-label="Select ${item.name}">
        <span class="dot"></span>
      </button>

      <div class="info">
        <div class="line">
          <div class="name">${item.name}</div>
          <div class="price">${item.price} <span>OMR</span></div>
        </div>

        ${item.desc ? `<div class="desc">${item.desc}</div>` : ""}

        <div class="controls">
          <button class="qbtn" data-action="dec" type="button" ${isSelected ? "" : "disabled"}>-</button>
          <span class="qty">${qty}</span>
          <button class="qbtn" data-action="inc" type="button" ${isSelected ? "" : "disabled"}>+</button>
          <span class="muted tiny">${isSelected ? "Added" : "Tap to add"}</span>
        </div>
      </div>
    </div>
  `;
}

function syncMenuUI() {
  document.querySelectorAll(".item").forEach((row) => {
    const k = row.getAttribute("data-key");
    const pick = row.querySelector(".pick");
    const dec = row.querySelector('[data-action="dec"]');
    const inc = row.querySelector('[data-action="inc"]');
    const qtyEl = row.querySelector(".qty");
    const hint = row.querySelector(".controls .tiny");

    const isSelected = selected.has(k);

    pick.classList.toggle("on", isSelected);
    dec.disabled = !isSelected;
    inc.disabled = !isSelected;
    qtyEl.textContent = isSelected ? selected.get(k).qty : 1;
    if (hint) hint.textContent = isSelected ? "Added" : "Tap to add";
  });
}

function renderOrder() {
  const entries = Array.from(selected.entries());

  if (entries.length === 0) {
    orderList.innerHTML = `<div class="empty">No items selected yet.</div>`;
    itemsCount.textContent = "0";
    totalValue.textContent = "0.00";
    return;
  }

  let totalItems = 0;
  let total = 0;

  orderList.innerHTML = entries.map(([k, e]) => {
    const lineTotal = Number(e.price) * e.qty;
    totalItems += e.qty;
    total += lineTotal;

    return `
      <div class="order-row" data-key="${k}">
        <div class="or-left">
          <div class="or-name">${e.name}</div>
          <div class="muted tiny">${e.qty} × ${money(e.price)} OMR</div>
        </div>

        <div class="or-right">
          <div class="or-total"><b>${money(lineTotal)}</b><span class="muted tiny"> OMR</span></div>
          <div class="or-qty">
            <button class="qbtn sm" data-action="dec" type="button">-</button>
            <span class="qty sm">${e.qty}</span>
            <button class="qbtn sm" data-action="inc" type="button">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  itemsCount.textContent = String(totalItems);
  totalValue.textContent = money(total);
}

menuRoot.addEventListener("click", (e) => {
  const row = e.target.closest(".item");
  if (!row) return;

  const k = row.getAttribute("data-key");
  const item = getItemByKey(k);
  if (!item) return;

  if (e.target.closest(".pick")) {
    if (selected.has(k)) selected.delete(k);
    else selected.set(k, { name: item.name, price: item.price, qty: 1 });

    syncMenuUI();
    renderOrder();
    return;
  }

  const btn = e.target.closest(".qbtn");
  if (btn) {
    if (!selected.has(k)) return;

    const action = btn.getAttribute("data-action");
    const entry = selected.get(k);

    if (action === "inc") entry.qty += 1;
    if (action === "dec") entry.qty = Math.max(1, entry.qty - 1);

    selected.set(k, entry);
    syncMenuUI();
    renderOrder();
  }
});

orderList.addEventListener("click", (e) => {
  const row = e.target.closest(".order-row");
  if (!row) return;

  const k = row.getAttribute("data-key");
  if (!selected.has(k)) return;

  const btn = e.target.closest(".qbtn");
  if (!btn) return;

  const action = btn.getAttribute("data-action");
  const entry = selected.get(k);

  if (action === "inc") entry.qty += 1;
  if (action === "dec") entry.qty = Math.max(1, entry.qty - 1);

  selected.set(k, entry);
  syncMenuUI();
  renderOrder();
});

clearBtn.addEventListener("click", () => {
  selected.clear();
  notesInput.value = "";
  renderMenu();
  renderOrder();
});

whatsAppBtn.addEventListener("click", () => {
  if (selected.size === 0) {
    alert("Please select at least one item.");
    return;
  }

  let msg = "Hello Rumi Cafe, I want to order:%0A";
  let total = 0;

  for (const e of selected.values()) {
    const lineTotal = Number(e.price) * e.qty;
    total += lineTotal;
    msg += `• ${e.name} — ${e.qty} × ${money(e.price)} OMR = ${money(lineTotal)} OMR%0A`;
  }

  msg += `%0ATotal: ${money(total)} OMR`;

  const notes = notesInput.value.trim();
  if (notes) {
    msg += `%0A%0ANotes: ${encodeURIComponent(notes)}`;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  window.open(url, "_blank", "noopener");
});

renderMenu();
renderOrder();
