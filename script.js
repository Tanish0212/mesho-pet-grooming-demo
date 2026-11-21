/* =====================================================================
   SHOP CONTENT — edit ONLY this object to reuse the site for another shop.
   Everything visible on the page (both languages) comes from here.
   hours: index 0 = Sunday … 6 = Saturday, ["HH:MM", "HH:MM"] in Dubai time, or null if closed.
   hoursGroups: how days are grouped in the hours table. See README.md.
   ===================================================================== */
const SHOP = {
  "name": "Mesho Pet Grooming Salon",
  "siteUrl": "https://tanish0212.github.io/mesho-pet-grooming-demo/",
  "schemaType": "LocalBusiness",
  "phoneDisplay": "+971 52 497 6360",
  "phoneHref": "tel:+971524976360",
  "phoneIntl": "+971524976360",
  "whatsappNumber": "971524976360",
  "directionsUrl": "https://www.google.com/maps/search/?api=1&query=Mesho+Pet+Grooming+Salon+Dubai+Wharf+Tower+1+Al+Jaddaf+Dubai",
  "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Mesho+Pet+Grooming+Salon+Dubai+Wharf+Tower+1+Al+Jaddaf+Dubai",
  "mapEmbedUrl": "https://maps.google.com/maps?q=Mesho%20Pet%20Grooming%20Salon%2C%20Dubai%20Wharf%20Tower%201%2C%20Al%20Jaddaf%2C%20Dubai&output=embed",
  "address": {
    "street": "Dubai Wharf Tower 1, Al Jaddaf Waterfront",
    "city": "Dubai",
    "country": "AE"
  },
  "timeZone": "Asia/Dubai",
  "hours": [
    [
      "09:00",
      "22:00"
    ],
    [
      "09:00",
      "22:00"
    ],
    [
      "09:00",
      "19:00"
    ],
    [
      "09:00",
      "22:00"
    ],
    [
      "09:00",
      "19:00"
    ],
    [
      "09:00",
      "22:00"
    ],
    [
      "09:00",
      "22:00"
    ]
  ],
  "hoursGroups": [
    {
      "days": [
        6,
        0,
        1,
        3,
        5
      ],
      "key": "long"
    },
    {
      "days": [
        2,
        4
      ],
      "key": "short"
    }
  ],
  "rating": {
    "value": "4.8",
    "count": 448
  },
  "showDemoBanner": true,
  "credit": "Tanish",
  "images": {
    "hero": {
      "src": "images/bath-time.svg",
      "en": "Line drawing of a dog with floppy ears peeking out of a bubble bath",
      "ar": "رسم خطي لكلب بأذنين متدليتين يطل من حوض مليء بالفقاعات"
    }
  },
  "stepIcons": [
    "i-wa",
    "i-store",
    "i-cup"
  ],
  "services": [
    {
      "image": "images/dog.svg",
      "en": {
        "name": "Dog grooming",
        "desc": "Grooming for dogs. Tell us the breed and what they need.",
        "alt": "Line drawing of a happy dog with floppy yellow ears",
        "ask": "dog grooming"
      },
      "ar": {
        "name": "تجميل الكلاب",
        "desc": "عناية وتجميل للكلاب. أخبرنا بالسلالة وما يحتاجه كلبك.",
        "alt": "رسم خطي لكلب سعيد بأذنين صفراوين متدليتين",
        "ask": "تجميل الكلاب"
      }
    },
    {
      "image": "images/cat.svg",
      "en": {
        "name": "Cat grooming",
        "desc": "Grooming for cats too. Ask us about your cat.",
        "alt": "Line drawing of a cat's face beside a comb",
        "ask": "cat grooming"
      },
      "ar": {
        "name": "تجميل القطط",
        "desc": "عناية وتجميل للقطط أيضًا. اسألنا عن قطتك.",
        "alt": "رسم خطي لوجه قطة بجانب مشط",
        "ask": "تجميل القطط"
      }
    },
    {
      "image": "images/haircut.svg",
      "en": {
        "name": "Haircuts",
        "desc": "Haircuts and trims for your pet's coat.",
        "alt": "Line drawing of scissors and tufts of fur",
        "ask": "a haircut for my pet"
      },
      "ar": {
        "name": "قص الشعر",
        "desc": "قص وتهذيب شعر حيوانك الأليف.",
        "alt": "رسم خطي لمقص وخصلات فرو",
        "ask": "قص شعر حيواني الأليف"
      }
    },
    {
      "image": "images/bath.svg",
      "en": {
        "name": "Bath & clean",
        "desc": "A thorough bath and clean.",
        "alt": "Line drawing of a tub full of bubbles under a shower head",
        "ask": "a bath and clean"
      },
      "ar": {
        "name": "الاستحمام والتنظيف",
        "desc": "استحمام وتنظيف شامل.",
        "alt": "رسم خطي لحوض مليء بالفقاعات تحت رأس دش",
        "ask": "الاستحمام والتنظيف"
      }
    },
    {
      "image": "images/detangle.svg",
      "en": {
        "name": "Detangling",
        "desc": "Brushing out knots so the coat is tangle-free.",
        "alt": "Line drawing of a grooming brush above wavy lines of fur",
        "ask": "detangling"
      },
      "ar": {
        "name": "فك التشابك",
        "desc": "تمشيط العُقد ليصبح الفرو بلا تشابك.",
        "alt": "رسم خطي لفرشاة تمشيط فوق خطوط فرو مموجة",
        "ask": "فك التشابك"
      }
    },
    {
      "image": "images/coffee.svg",
      "en": {
        "name": "Coffee while you wait",
        "desc": "Owners get a free coffee while they wait.",
        "alt": "Line drawing of a cup of coffee with a paw print on the foam",
        "ask": "waiting at the salon"
      },
      "ar": {
        "name": "قهوة أثناء الانتظار",
        "desc": "قهوة مجانية لأصحاب الحيوانات أثناء الانتظار.",
        "alt": "رسم خطي لكوب قهوة عليه أثر مخلب",
        "ask": "الانتظار في الصالون"
      }
    }
  ],
  "reviews": [
    "They thoroughly cleaned him and even made sure no hair tangles.",
    "Staff were friendly and attentive and the place was clean.",
    "They are very accommodating and they are knowledgeable with hair cut and grooming."
  ],
  "text": {
    "en": {
      "skip": "Skip to content",
      "navLabel": "Main",
      "navServices": "Services",
      "navHow": "How it works",
      "navReviews": "Reviews",
      "navVisit": "Visit",
      "langLabel": "Language",
      "waCta": "Message on WhatsApp",
      "waShort": "WhatsApp",
      "callCta": "Call the salon",
      "directions": "Get Directions",
      "newTab": "(opens in a new tab)",
      "ratingLine": "{rating} on Google · {count} reviews",
      "statusOpen": "Open now · until {time}",
      "statusOpensToday": "Closed now · opens today at {time}",
      "statusReopens": "Closed now · reopens today at {time}",
      "closed": "Closed",
      "statusOpensTomorrow": "Closed now · opens tomorrow at {time}",
      "statusOpensLater": "Closed now · opens {day} at {time}",
      "am": "AM",
      "pm": "PM",
      "days": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "today": "Today",
      "stripAria": "Quick facts",
      "stripServicesLabel": "Services",
      "stripHoursLabel": "Hours",
      "stripRatingLabel": "Google rating",
      "stripRating": "{rating} / 5 · {count} reviews",
      "servicesKicker": "Services",
      "quoteCta": "Ask on WhatsApp",
      "quoteNote": "Prices aren't listed online. Message us on WhatsApp for prices.",
      "howKicker": "How it works",
      "reviewsKicker": "Reviews",
      "basedOn": "{count} reviews on Google",
      "reviewLabel": "Google review",
      "readMore": "Read more on Google",
      "visitKicker": "Visit",
      "addressLabel": "Address",
      "hoursLabel": "Opening hours",
      "phoneLabel": "Phone & WhatsApp",
      "footerContact": "Contact",
      "credit": "Website by {credit}",
      "pageTitle": "Mesho Pet Grooming Salon · Dog and cat grooming in Al Jaddaf, Dubai",
      "metaDescription": "Dog and cat grooming salon at Dubai Wharf Tower 1, Al Jaddaf Waterfront: haircuts, bathing and cleaning, and detangling. Free coffee for owners while they wait. Rated 4.8 on Google.",
      "demoBanner": "Demo preview – made for Mesho Pet Grooming Salon. Not the official website yet.",
      "brandName": "Mesho",
      "brandSub": "Pet Grooming · Al Jaddaf",
      "waMessage": "Hello Mesho, I found you on your website and I'd like to ask about grooming for my pet.",
      "waMessageAbout": "Hello Mesho, I found you on your website and I'd like to ask about {service}.",
      "waAria": "Message Mesho Pet Grooming Salon on WhatsApp",
      "heroEyebrow": "Dog & cat grooming · Al Jaddaf",
      "heroTitle": [
        "Fresh, fluffy,",
        "tangle‑free."
      ],
      "heroSub": "Dog and cat grooming at Dubai Wharf Tower 1: haircuts, bathing and cleaning, and detangling. Free coffee for owners while they wait.",
      "heroPlace": "Dubai Wharf Tower 1, Al Jaddaf Waterfront",
      "heroCaption": "Dogs & cats welcome",
      "stripServices": "Dog grooming · Cat grooming · Haircuts · Bath & clean · Detangling",
      "groups": {
        "long": "Sat, Sun, Mon, Wed, Fri",
        "short": "Tuesday & Thursday"
      },
      "groupsShort": {
        "long": "Sat–Mon, Wed, Fri",
        "short": "Tue & Thu"
      },
      "servicesTitle": "Grooming for dogs and cats.",
      "servicesIntro": "Tap any service to ask us about it on WhatsApp.",
      "howTitle": "Pampering in three steps.",
      "steps": [
        {
          "title": "Message us on WhatsApp",
          "text": "Tell us about your dog or cat, and ask about prices."
        },
        {
          "title": "Bring your pet",
          "text": "Dubai Wharf Tower 1, Al Jaddaf Waterfront."
        },
        {
          "title": "Have a coffee",
          "text": "Relax with a free coffee while your pet is groomed."
        }
      ],
      "reviewsTitle": "What pet owners say.",
      "visitTitle": "Visit the salon.",
      "addressLines": [
        "Dubai Wharf Tower 1",
        "Al Jaddaf Waterfront, Dubai"
      ],
      "mapTitle": "Map showing Mesho Pet Grooming Salon at Dubai Wharf Tower 1, Al Jaddaf, Dubai",
      "ctaTitle": "Bath day for your furry friend?",
      "ctaSub": "Send us a message on WhatsApp, or call the salon.",
      "footerName": "Mesho Pet Grooming Salon",
      "footerTag": "Dog and cat grooming at Al Jaddaf Waterfront, Dubai."
    },
    "ar": {
      "skip": "انتقل إلى المحتوى",
      "navLabel": "القائمة الرئيسية",
      "navServices": "الخدمات",
      "navHow": "كيف نعمل",
      "navReviews": "التقييمات",
      "navVisit": "الموقع",
      "langLabel": "اللغة",
      "waCta": "راسلنا عبر واتساب",
      "waShort": "واتساب",
      "callCta": "اتصل بالصالون",
      "directions": "احصل على الاتجاهات",
      "newTab": "(يفتح في نافذة جديدة)",
      "ratingLine": "{rating} على جوجل · {count} تقييمًا",
      "statusOpen": "مفتوح الآن · حتى {time}",
      "statusOpensToday": "مغلق الآن · يفتح اليوم الساعة {time}",
      "statusReopens": "مغلق الآن · يعيد الفتح اليوم الساعة {time}",
      "closed": "مغلق",
      "midnight": "منتصف الليل",
      "statusOpensTomorrow": "مغلق الآن · يفتح غدًا الساعة {time}",
      "statusOpensLater": "مغلق الآن · يفتح يوم {day} الساعة {time}",
      "am": "صباحًا",
      "pm": "مساءً",
      "days": [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      "today": "اليوم",
      "stripAria": "معلومات سريعة",
      "stripServicesLabel": "الخدمات",
      "stripHoursLabel": "ساعات العمل",
      "stripRatingLabel": "التقييم على جوجل",
      "stripRating": "{rating} من 5 · {count} تقييمًا",
      "servicesKicker": "الخدمات",
      "quoteCta": "اسأل عبر واتساب",
      "quoteNote": "الأسعار غير معروضة على الموقع. راسلونا عبر واتساب لمعرفة الأسعار.",
      "howKicker": "كيف نعمل",
      "reviewsKicker": "التقييمات",
      "basedOn": "{count} تقييمًا على جوجل",
      "reviewLabel": "تقييم من جوجل",
      "readMore": "اقرأ المزيد على جوجل",
      "visitKicker": "زورونا",
      "addressLabel": "العنوان",
      "hoursLabel": "ساعات العمل",
      "phoneLabel": "الهاتف وواتساب",
      "footerContact": "تواصل معنا",
      "credit": "تصميم الموقع: {credit}",
      "pageTitle": "ميشو لتجميل الحيوانات الأليفة · تجميل الكلاب والقطط في الجداف، دبي",
      "metaDescription": "صالون تجميل للكلاب والقطط في برج دبي وارف 1، واجهة الجداف المائية: قص الشعر، الاستحمام والتنظيف، وفك التشابك. قهوة مجانية لأصحاب الحيوانات أثناء الانتظار. تقييم 4.8 على جوجل.",
      "demoBanner": "نسخة تجريبية – صُممت خصيصًا لصالون ميشو لتجميل الحيوانات الأليفة. ليست الموقع الرسمي بعد.",
      "brandName": "ميشو",
      "brandSub": "تجميل الحيوانات · الجداف",
      "waMessage": "مرحبًا ميشو، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن تجميل حيواني الأليف.",
      "waMessageAbout": "مرحبًا ميشو، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن {service}.",
      "waAria": "راسل صالون ميشو لتجميل الحيوانات الأليفة عبر واتساب",
      "heroEyebrow": "تجميل الكلاب والقطط · الجداف",
      "heroTitle": [
        "فرو نظيف وناعم",
        "وبلا تشابك."
      ],
      "heroSub": "تجميل الكلاب والقطط في برج دبي وارف 1: قص الشعر، الاستحمام والتنظيف، وفك التشابك. قهوة مجانية لأصحاب الحيوانات أثناء الانتظار.",
      "heroPlace": "برج دبي وارف 1، واجهة الجداف المائية",
      "heroCaption": "نرحب بالكلاب والقطط",
      "stripServices": "تجميل الكلاب · تجميل القطط · قص الشعر · الاستحمام والتنظيف · فك التشابك",
      "groups": {
        "long": "السبت، الأحد، الاثنين، الأربعاء، الجمعة",
        "short": "الثلاثاء والخميس"
      },
      "groupsShort": {
        "long": "السبت–الاثنين، الأربعاء، الجمعة",
        "short": "الثلاثاء والخميس"
      },
      "servicesTitle": "عناية وتجميل للكلاب والقطط.",
      "servicesIntro": "اضغط على أي خدمة لتسألنا عنها عبر واتساب.",
      "howTitle": "دلال في ثلاث خطوات.",
      "steps": [
        {
          "title": "راسلنا عبر واتساب",
          "text": "أخبرنا عن كلبك أو قطتك، واسأل عن الأسعار."
        },
        {
          "title": "أحضر حيوانك الأليف",
          "text": "برج دبي وارف 1، واجهة الجداف المائية."
        },
        {
          "title": "استمتع بقهوتك",
          "text": "استرخِ مع قهوة مجانية أثناء تجميل حيوانك."
        }
      ],
      "reviewsTitle": "ماذا يقول أصحاب الحيوانات.",
      "visitTitle": "زُر الصالون.",
      "addressLines": [
        "برج دبي وارف 1",
        "واجهة الجداف المائية، دبي"
      ],
      "mapTitle": "خريطة توضح موقع صالون ميشو لتجميل الحيوانات الأليفة في برج دبي وارف 1، الجداف، دبي",
      "ctaTitle": "يوم استحمام لصديقك الصغير؟",
      "ctaSub": "أرسل لنا رسالة عبر واتساب، أو اتصل بالصالون.",
      "footerName": "ميشو لتجميل الحيوانات الأليفة",
      "footerTag": "تجميل الكلاب والقطط في واجهة الجداف المائية، دبي."
    }
  }
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";

  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable — default to English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str, extra) {
    let out = String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
    if (extra) for (const [k, v] of Object.entries(extra)) out = out.split("{" + k + "}").join(v);
    return out;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }

  function useIcon(id, size) {
    const s = size || 20;
    const span = el("span", { class: "icon", "aria-hidden": "true" });
    span.innerHTML = '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '"><use href="#' + id + '"/></svg>';
    return span;
  }

  function stars(value) {
    const wrap = el("span", { class: "stars", "aria-hidden": "true" });
    const full = Math.round(parseFloat(value));
    for (let i = 0; i < 5; i++) {
      wrap.insertAdjacentHTML("beforeend",
        '<svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 1.8l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8 1.7 7.8l5.8-.7Z" ' +
        (i < full ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.3"') + "/></svg>");
    }
    return wrap;
  }

  const ltr = (text) => el("span", { dir: "ltr", class: "ltr num", text });

  /* ---------- WhatsApp links ---------- */
  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- Hours + open / closed badge (shop time zone) ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  // A day is null (closed), one range ["HH:MM","HH:MM"], or several ranges [["09:30","14:00"],["17:00","22:30"]].
  // "24:00" = closes at midnight.
  const rangesOf = (day) => { const h = SHOP.hours[day]; if (!h) return []; return typeof h[0] === "string" ? [h] : h; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const hh = h % 24;
    if (hh === 0 && m === 0 && tx.midnight) return tx.midnight;
    const h12 = hh % 12 === 0 ? 12 : hh % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (hh < 12 ? tx.am : tx.pm);
  }

  function nowInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SHOP.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function shopStatus() {
    const now = nowInShopTZ();
    const today = rangesOf(now.day);
    const cur = today.find((r) => now.min >= toMin(r[0]) && now.min < toMin(r[1]));
    if (cur) return { open: true, key: "statusOpen", time: cur[1], day: now.day };
    const next = today.find((r) => now.min < toMin(r[0]));
    if (next) {
      const onBreak = today.some((r) => now.min >= toMin(r[1]));
      return { open: false, key: onBreak ? "statusReopens" : "statusOpensToday", time: next[0], day: now.day };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      const r = rangesOf(d);
      if (r.length) {
        return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: r[0][0], day: d };
      }
    }
    return { open: false, key: "statusOpensToday", time: "00:00", day: now.day };
  }

  function rangeLabels(day) {
    const r = rangesOf(day);
    return r.length ? r.map((h) => timeLabel(h[0]) + " – " + timeLabel(h[1])) : [t().closed];
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: tx.days[s.day] });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
    const today = nowInShopTZ().day;
    $$(".js-hours tr").forEach((row) => {
      const isToday = row.dataset.days.split(",").map(Number).includes(today);
      row.classList.toggle("is-today", isToday);
      const flag = $(".today-flag", row);
      if (flag) flag.hidden = !isToday;
    });
  }

  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  function renderHours() {
    const tx = t();
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [
        document.createTextNode(tx.groups[g.key] + " "),
        el("span", { class: "today-flag", text: tx.today, hidden: true }),
      ]),
      el("td", null, rangeLabels(g.days[0]).map((l) => el("span", { class: "range" }, [ltrIfEn(l)]))),
    ]))));
    $(".js-strip-hours").replaceChildren(...SHOP.hoursGroups.map((g) =>
      el("span", { class: "strip-line" }, [document.createTextNode(tx.groupsShort[g.key] + " "),
        ...rangeLabels(g.days[0]).flatMap((l, i) => (i ? [document.createTextNode(", "), ltrIfEn(l)] : [ltrIfEn(l)]))])));
  }

  /* ---------- Render ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { if (tx[node.dataset.t] !== undefined) node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-wa").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);

    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // Hero headline: one line per entry, last line in the accent style.
    const h1 = $(".js-hero-title");
    h1.replaceChildren(...tx.heroTitle.map((line, i) =>
      el("span", { class: "line" + (i === tx.heroTitle.length - 1 ? " accent" : ""), style: "--i:" + i, text: line + " " })));

    // Rating
    $$(".js-rating").forEach((a) => {
      a.replaceChildren(stars(SHOP.rating.value), el("span", { text: fmt(tx.ratingLine) }), el("span", { class: "visually-hidden js-newtab", text: " " + tx.newTab }));
    });
    $$(".js-stars").forEach((n) => n.replaceChildren(stars(SHOP.rating.value)));
    $$(".js-score").forEach((n) => { n.textContent = SHOP.rating.value; });

    // Image slots
    $$(".js-img").forEach((img) => {
      const slot = SHOP.images[img.dataset.img];
      if (img.getAttribute("src") !== slot.src) img.src = slot.src;
      img.alt = slot[lang];
    });

    // Services
    const other = lang === "ar" ? "en" : "ar";
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal", style: "--d:" + (i % 3) * 80 + "ms" }, [
      el("div", { class: "service-media" }, [
        el("img", { src: s.image, alt: s[lang].alt, width: 480, height: 600, loading: "lazy", decoding: "async" }),
      ]),
      el("div", { class: "service-body" }, [
        el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        el("h3", { class: "service-name", text: s[lang].name }),
        el("p", { class: "service-alt", lang: other, dir: other === "ar" ? "rtl" : "ltr", text: s[other].name }),
        el("p", { class: "service-desc", text: s[lang].desc }),
        el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
          el("span", { text: tx.quoteCta }),
          el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
          useIcon("i-arrow", 18),
        ]),
      ]),
    ])));

    // Steps
    $(".js-steps").replaceChildren(...tx.steps.map((s, i) => el("li", { class: "step reveal", style: "--d:" + i * 90 + "ms" }, [
      el("div", { class: "step-mark" }, [el("span", { class: "step-num", text: String(i + 1) }), stepIcon(SHOP.stepIcons[i])]),
      el("h3", { text: s.title }),
      el("p", { text: s.text }),
    ])));

    // Reviews (kept in English — real quotes)
    $(".js-reviews-list").replaceChildren(...SHOP.reviews.map((r, i) => el("li", { class: "review reveal", style: "--d:" + i * 90 + "ms" }, [
      el("figure", null, [
        quoteMark(),
        el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: r })]),
        el("figcaption", { text: tx.reviewLabel }),
      ]),
    ])));

    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));
    renderHours();

    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    renderStatus();
    observeReveals();
  }

  function stepIcon(id) {
    const s = el("span", { class: "step-icon", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22"><use href="#' + id + '"/></svg>';
    return s;
  }

  function quoteMark() {
    const s = el("span", { class: "quote-mark", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 48 36" width="36" height="27"><path fill="currentColor" d="M0 36V22.4C0 9.6 6.2 2.2 18.6 0l2 4.6C13.8 6.6 10.6 10.4 10.2 16H19v20Zm27 0V22.4C27 9.6 33.2 2.2 45.6 0l2 4.6C40.8 6.6 37.6 10.4 37.2 16H46v20Z"/></svg>';
    return s;
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- Structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const data = {
      "@context": "https://schema.org",
      "@type": SHOP.schemaType,
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      logo: SHOP.siteUrl + "images/logo.svg",
      telephone: SHOP.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP.address.street,
        addressLocality: SHOP.address.city,
        addressCountry: SHOP.address.country,
      },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.flatMap((g) => rangesOf(g.days[0]).map((r) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: r[0],
        closes: r[1] === "24:00" ? "23:59" : r[1],
      }))),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- Motion: reveal on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("is-in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- Sticky header compacts on scroll ---------- */
  const header = $(".site-header");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { header.classList.toggle("is-compact", window.scrollY > 24); ticking = false; });
  }

  /* ---------- Init ---------- */
  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
