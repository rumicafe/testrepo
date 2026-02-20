<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Rumi Cafe Menu</title>
  <style>
    :root{
      --bg1:#2b0b47;
      --bg2:#4a1670;
      --card:#ffffff14;
      --card2:#ffffff0d;
      --text:#ffffff;
      --muted:#e9d9ffcc;
      --line:#ffffff26;
      --accent:#ffd24d;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      color:var(--text);
      background: radial-gradient(1200px 800px at 30% 10%, #6b2aa6 0%, transparent 55%),
                  radial-gradient(900px 600px at 80% 35%, #3a0f65 0%, transparent 60%),
                  linear-gradient(160deg, var(--bg2), var(--bg1));
      min-height:100vh;
      display:flex;
      justify-content:center;
      padding:28px 14px 40px;
    }
    .page{
      width:min(980px, 100%);
    }

    /* Header */
    .header{
      display:flex;
      align-items:flex-end;
      justify-content:space-between;
      gap:14px;
      padding:18px 18px 14px;
      border:1px solid var(--line);
      background:linear-gradient(180deg, var(--card), var(--card2));
      border-radius:18px;
      backdrop-filter: blur(8px);
    }
    .brand{
      display:flex;
      flex-direction:column;
      gap:6px;
    }
    .brand .title{
      font-size:28px;
      letter-spacing:.6px;
      font-weight:800;
      line-height:1.05;
    }
    .brand .subtitle{
      font-size:13px;
      color:var(--muted);
    }
    .meta{
      text-align:right;
      font-size:12px;
      color:var(--muted);
      line-height:1.55;
      white-space:nowrap;
    }

    /* Layout */
    .grid{
      margin-top:14px;
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:14px;
    }
    @media (max-width: 860px){
      .grid{grid-template-columns:1fr}
      .meta{text-align:left; white-space:normal}
      .header{align-items:flex-start; flex-direction:column}
    }

    .panel{
      border:1px solid var(--line);
      background:linear-gradient(180deg, var(--card), var(--card2));
      border-radius:18px;
      overflow:hidden;
    }
    .panel-head{
      padding:14px 16px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      border-bottom:1px solid var(--line);
    }
    .panel-head h2{
      margin:0;
      font-size:15px;
      letter-spacing:.6px;
      text-transform:uppercase;
      font-weight:900;
    }
    .badge{
      font-size:12px;
      padding:6px 10px;
      border-radius:999px;
      border:1px solid var(--line);
      color:var(--muted);
    }

    .items{padding:10px 10px 12px}
    .item{
      display:grid;
      grid-template-columns: 1fr auto;
      gap:10px;
      padding:12px 12px;
      border:1px solid var(--line);
      border-radius:14px;
      background:#00000012;
      margin:10px 6px;
    }
    .name{
      font-weight:800;
      letter-spacing:.2px;
      margin:0 0 6px 0;
      font-size:14px;
    }
    .desc{
      margin:0;
      font-size:12.5px;
      color:var(--muted);
      line-height:1.35;
    }
    .price{
      font-weight:900;
      font-size:14px;
      color:var(--accent);
      align-self:start;
      padding-left:10px;
      border-left:1px dashed var(--line);
      min-width:54px;
      text-align:right;
    }

    /* Footer */
    .footer{
      margin-top:14px;
      padding:12px 16px;
      border:1px solid var(--line);
      background:linear-gradient(180deg, var(--card), var(--card2));
      border-radius:18px;
      display:flex;
      justify-content:space-between;
      gap:10px;
      color:var(--muted);
      font-size:12px;
      flex-wrap:wrap;
    }
    .footer b{color:#fff}
  </style>
</head>
<body>
  <main class="page">

    <section class="header">
      <div class="brand">
        <div class="title">Rumi Cafe</div>
        <div class="subtitle">Burger • Wraps • Snacks • Pasta</div>
      </div>
      <div class="meta">
        <div><b>Theme:</b> Purple</div>
        <div><b>Note:</b> Prices in OMR</div>
      </div>
    </section>

    <section class="grid">

      <div class="panel">
        <div class="panel-head">
          <h2>Burgers</h2>
          <span class="badge">Signature</span>
        </div>
        <div class="items">
          <div class="item">
            <div>
              <p class="name">Rumi Classic</p>
              <p class="desc">Juicy single smashed beef patty in a soft bun with melted cheese, signature sauce and pickles.</p>
            </div>
            <div class="price">—</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Bull Mushroom</p>
              <p class="desc">Double beef patties with caramelized onions, melted cheese, pickles and creamy mushroom sauce.</p>
            </div>
            <div class="price">—</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Last Dance</p>
              <p class="desc">Triple smashed beef patties stacked with melted cheese, pickles and signature sauce.</p>
            </div>
            <div class="price">—</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Grilled Pro</p>
              <p class="desc">Tender grilled chicken fillet seasoned with café spices, cheese, fresh vegetables and pickles.</p>
            </div>
            <div class="price">—</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Smoked Mushroom</p>
              <p class="desc">Double grilled chicken fillet with melted cheese and rich Italian mushroom sauce.</p>
            </div>
            <div class="price">1.8</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Crispy Zinger</p>
              <p class="desc">Crispy fried chicken fillet seasoned with herbs, melted cheese and special sauce.</p>
            </div>
            <div class="price">—</div>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head">
          <h2>Snacks & Wraps</h2>
          <span class="badge">Popular</span>
        </div>

        <div class="items">
          <div class="item">
            <div>
              <p class="name">Turkish Wrap</p>
              <p class="desc">Juicy chicken, pickles, fries and fresh toppings. Choice of tortilla / khubs / porotha.</p>
            </div>
            <div class="price">1.2</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Octa Beef Wrap</p>
              <p class="desc">Flavorful beef wrap with vegetables, fries and sauces. Choice of tortilla / khubs / porotha.</p>
            </div>
            <div class="price">1.0</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Loaded Fries</p>
              <p class="desc">Golden crispy fries topped with crispy chicken bites, Rumi sauces and jalapeños.</p>
            </div>
            <div class="price">1.8</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Cheese Chilli Balls (6 pcs)</p>
              <p class="desc">Crispy bites with a gooey cheese center and a chilli kick.</p>
            </div>
            <div class="price">1.2</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Hash Brown</p>
              <p class="desc">Crispy fried potato hash brown, perfectly golden and crunchy.</p>
            </div>
            <div class="price">1.3</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Sandos Sandwich</p>
              <p class="desc">Signature sandwich with scrambled egg and cheese sauce, plus extra chicken bites.</p>
            </div>
            <div class="price">1.2</div>
          </div>

          <div class="item">
            <div>
              <p class="name">Alfredo Pasta</p>
              <p class="desc">Creamy Alfredo pasta cooked in a smooth parmesan garlic sauce.</p>
            </div>
            <div class="price">—</div>
          </div>
        </div>
      </div>

    </section>

    <section class="footer">
      <div><b>Tip:</b> Paste this into <b>index.html</b> in your GitHub Pages repo.</div>
      <div><b>Next:</b> Upload your image — I’ll match the design exactly.</div>
    </section>

  </main>
</body>
</html>
