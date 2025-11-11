# moon-bilkes
Official website for Moon Bikes, Chennai.
[moon.html](https://github.com/user-attachments/files/23469391/moon.html)
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Moon Bikes — Showroom</title>
  <!-- Use a clean modern font from Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --primary:#1e73be;
      --accent:#e63946;
      --sun:#f4c430;
      --dark:#0f1720;
      --muted:#f5f7fa;
      --glass: rgba(255,255,255,0.08);
      --radius:14px;
    }

    *{box-sizing:border-box}
    html,body{height:100%;margin:0;font-family:'Poppins', Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial; color:var(--dark);background:linear-gradient(180deg,var(--muted),#ffffff)}
    .site{max-width:1200px;margin:28px auto;padding:18px;border-radius:18px;background:linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85));box-shadow:0 8px 30px rgba(15,23,32,0.08)}

    header{display:flex;align-items:center;justify-content:space-between;gap:18px}
    .brand{display:flex;align-items:center;gap:14px}
    .logo{width:88px;height:88px;border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:white;box-shadow:0 6px 18px rgba(30,115,190,0.18)}
    .logo img{width:82%;height:82%;object-fit:contain;display:block}

    .title h1{margin:0;font-size:20px;letter-spacing:0.4px;font-weight:700}
    .title p{margin:0;font-size:13px;color:#555}
    .btn{padding:10px 14px;border-radius:10px;border:0;background:var(--glass);cursor:pointer}
    .btn.primary{background:linear-gradient(90deg,var(--primary),#2aa4ff);color:white}
    .btn.accent{background:linear-gradient(90deg,var(--accent),#ff7b7b);color:white}

    .hero{display:grid;grid-template-columns:1fr 480px;gap:20px;margin-top:18px;align-items:stretch}
    .hero-card{padding:20px;border-radius:var(--radius);background:linear-gradient(180deg,rgba(255,255,255,0.95),rgba(250,250,250,0.85));box-shadow:0 10px 30px rgba(15,23,32,0.04)}

    /* Showroom uses background-image with contain to avoid unwanted cropping */
    .showroom{position:relative;border-radius:12px;height:100%;min-height:420px;background-color:#f8fbff;display:flex;align-items:center;justify-content:center;overflow:hidden}
    .showroom-bg{width:100%;height:100%;background-image:url('./moonbikes.jpg');background-repeat:no-repeat;background-position:center center;background-size:contain}
    /* Provide fallback image tag (hidden by default) if you prefer cover crop */
    .showroom img{display:none;width:100%;height:100%;object-fit:cover}
    .overlay{position:absolute;inset:0;background:linear-gradient(180deg, rgba(30,115,190,0.03), rgba(0,0,0,0.02));pointer-events:none}

    .ribbon{position:absolute;left:14px;top:14px;background:linear-gradient(90deg,var(--accent),#ff7b7b);color:white;padding:8px 12px;border-radius:8px;font-weight:700;box-shadow:0 6px 20px rgba(230,57,70,0.15);z-index:6}
    .ribbon small{display:block;font-size:11px;font-weight:600;opacity:0.95}

    .info h2{margin:4px 0 8px;font-size:18px}
    .meta{display:flex;gap:8px;flex-wrap:wrap}
    .chip{padding:8px 10px;border-radius:999px;background:rgba(15,23,32,0.06);font-weight:600}
    .cta{display:flex;gap:10px;margin-top:18px;flex-wrap:wrap}
    .map-btn{display:inline-block;padding:10px 12px;border-radius:10px;background:linear-gradient(90deg,var(--primary),#2aa4ff);color:white;text-decoration:none;font-weight:700}

    form{margin-top:16px;display:flex;flex-direction:column;gap:10px}
    input, select, textarea{padding:10px;border-radius:10px;border:1px solid rgba(15,23,32,0.1);font-size:14px}
    label{font-size:13px;color:#333}
    .row{display:flex;gap:10px}
    .col{flex:1}
    form button{margin-top:6px;background:linear-gradient(90deg,var(--accent),#ff7b7b);color:white;font-weight:700;border:none;padding:10px;border-radius:10px;cursor:pointer}

    .gallery{display:flex;gap:10px;margin-top:18px;flex-wrap:wrap}
    .gallery .thumb{flex:1 1 120px;height:100px;border-radius:10px;overflow:hidden;border:1px solid rgba(15,23,32,0.04)}
    .gallery img{width:100%;height:100%;object-fit:cover}
    footer{margin-top:22px;display:flex;flex-direction:column;gap:8px;padding-top:14px;border-top:1px dashed rgba(15,23,32,0.04)}
    .contact{display:flex;flex-direction:column;gap:6px;text-align:right}
    .contact .phone{font-weight:800;color:var(--primary)}
    .contact .address{font-size:13px;color:#444}

    @media (max-width:1100px){.hero{grid-template-columns:1fr 420px}}
    @media (max-width:980px){.hero{grid-template-columns:1fr;} .contact{text-align:left}}
    @media (max-width:520px){.site{margin:12px;padding:12px}}

  </style>
</head>
<body>
  <div class="site">
    <header>
      <div class="brand">
        <div class="logo"><img src="logo.png" alt="Moon Bikes Logo"></div>
        <div class="title">
          <h1>Moon Bikes — Multi Brand Two Wheelers</h1>
          <p>No.10 D, Ethiraj Swamy Salai, Erukkancherry, Chennai - 600 118</p>
        </div>
      </div>
      <div class="contact">
        <a class="phone" href="tel:+919884445509">+91 9884445509</a>
        <div class="address">Open: 9:00 AM — 8:00 PM</div>
      </div>
    </header>

    <section class="hero">
      <div class="hero-card showroom">
        <div class="ribbon">NOW OPEN<small>Walk-ins welcome • Instant delivery on select models</small></div>
        <!-- Background-based showroom image avoids cropping and keeps the entire sign visible -->
        <div class="showroom-bg" aria-hidden></div>
        <div class="overlay"></div>
      </div>

      <aside class="hero-card info">
        <h2>Book Your Bike Consultation</h2>
        <p>Moon Bikes showroom is open! Fill out the short form below to schedule a consultation, pick a model, and choose payment type (Full cash or EMI). We'll contact you to confirm.</p>

        <!-- Form connected to Formspree (endpoint provided) -->
        <form action="https://formspree.io/f/xpwlobqd" method="POST" accept-charset="UTF-8">
          <input type="hidden" name="_subject" value="New bike consultation request — Moon Bikes">

          <label for="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your full name" required>

          <label for="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="10-digit mobile number" pattern="[0-9]{10}" required>

          <label for="email">Email (optional)</label>
          <input id="email" name="email" type="email" placeholder="you@example.com">

          <label for="model">Select Bike Model</label>
          <select id="model" name="model" required>
            <option value="" disabled selected>Choose model</option>
            <option>Hero Splendor Plus</option>
            <option>Hero HF Deluxe</option>
            <option>Hero Glamour</option>
            <option>Hero Xtreme 160R</option>
            <option>Honda CB Shine</option>
            <option>Honda SP 125</option>
            <option>Honda Activa (Scooter)</option>
            <option>TVS Apache RTR 160</option>
            <option>TVS Apache RTR 200</option>
            <option>TVS Jupiter (Scooter)</option>
            <option>Yamaha FZ-FI</option>
            <option>Yamaha R15</option>
            <option>Yamaha MT-15</option>
            <option>Bajaj Pulsar 150</option>
            <option>Bajaj Pulsar NS200</option>
            <option>Bajaj Dominar 250</option>
            <option>Royal Enfield Classic 350</option>
            <option>Royal Enfield Hunter 350</option>
            <option>Royal Enfield Meteor 350</option>
            <option>KTM Duke 200</option>
            <option>KTM Duke 390</option>
            <option>TVS Apache RR 310</option>
            <option>Suzuki Gixxer</option>
            <option>Suzuki Access 125 (Scooter)</option>
            <option>Bajaj Avenger</option>
            <option>Ather 450X (Electric)</option>
            <option>Ola S1 Pro (Electric)</option>
            <option>TVS iQube (Electric)</option>
            <option>Hero Electric Optima (E-bike)</option>
            <option>Other (specify in notes)</option>
          </select>

          <div class="row">
            <div class="col">
              <label for="payment">Payment Type</label>
              <select id="payment" name="payment" required>
                <option value="" disabled selected>Select payment</option>
                <option>Full Cash</option>
                <option>EMI</option>
              </select>
            </div>
            <div class="col">
              <label for="tenure">If EMI — Preferred Tenure</label>
              <select id="tenure" name="tenure">
                <option value="" disabled selected>Choose tenure (months)</option>
                <option>6 months</option>
                <option>9 months</option>
                <option>12 months</option>
                <option>24 months</option>
                <option>36 months</option>
              </select>
            </div>
          </div>

          <label for="color">Preferred Color (optional)</label>
          <input id="color" name="color" type="text" placeholder="e.g. Matte Black, Pearl White">

          <label>Preferred Contact Method</label>
          <select name="contact_method" required>
            <option value="" disabled selected>Choose contact method</option>
            <option>Phone Call</option>
            <option>WhatsApp</option>
            <option>Email</option>
          </select>

          <label for="tradein">Do you want to trade-in an old vehicle?</label>
          <select id="tradein" name="tradein">
            <option value="" disabled selected>Trade-in?</option>
            <option>No</option>
            <option>Yes — Bike</option>
            <option>Yes — Scooter</option>
            <option>Yes — Others</option>
          </select>

          <label for="datetime">Preferred Date & Time for Consultation</label>
          <input id="datetime" name="preferred_time" type="datetime-local">

          <label for="notes">Additional Notes</label>
          <textarea id="notes" name="notes" rows="3" placeholder="Tell us any special requests or model variants..."></textarea>

          <label style="font-size:13px;display:flex;align-items:center"><input required type="checkbox" name="consent" style="margin-right:8px"> I agree to be contacted by Moon Bikes regarding this inquiry.</label>

          <button type="submit">Submit Request</button>
        </form>

        <div class="cta">
          <a class="map-btn" href="https://maps.app.goo.gl/FL1nDF2s2etrRGSg6" target="_blank" rel="noopener">Open Location</a>
          <a class="btn primary" href="tel:+91988444550">Call Now</a>
        </div>

        <div class="gallery">
          <div class="thumb"><img src="./p1.jpg" alt="show photo p1"></div>
          <div class="thumb"><img src="./p2.jpg" alt="show photo p2"></div>
          <div class="thumb"><img src="./p3.jpg" alt="show photo p3"></div>
          <div class="thumb"><img src="./p4.jpg" alt="show photo p4"></div>
        </div>

        <footer>
          <div style="font-size:13px;color:#666">Drop these files beside this HTML: <strong>logo.jpg</strong>, <strong>moonbikes.jpg</strong>, <strong>p1.jpg</strong>–<strong>p4.jpg</strong>. Form submissions will be sent via Formspree to the configured endpoint.</div>
          <div style="font-weight:700;color:var(--primary)">Moon Bikes</div>
        </footer>
      </aside>
    </section>
  </div>

  <script>
    // Small usability: show a simple success message client-side after submit (Formspree still handles delivery).
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e){
      // Let the browser submit normally to Formspree, but show a quick message and disable button to avoid duplicate submits.
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(()=>{
        btn.textContent = 'Submitted';
      }, 1500);
    });
  </script>
</body>
</html>
