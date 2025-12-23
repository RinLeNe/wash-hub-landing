const DATA = {
  1: {
    name: "Chi nhánh 1 – Bát Sứ",
    address: "4 Bát Sứ – Hoàn Kiếm – Hà Nội",
    phone: "0936601683",
    time: "24/7",
    desc: "Chi nhánh trung tâm – giặt sấy nhanh 24/7 tại Hoàn Kiếm.",
    image: "assets/branch/1/main.jpg",
    images: ["1.jpg","2.jpg","3.jpg"],
    services: ["Giặt + sấy theo kg", "Chăn mền", "Đồ cao cấp"],
    map: "https://www.google.com/maps?q=4%20B%C3%A1t%20S%E1%BB%A9%20Ho%C3%A0n%20Ki%E1%BA%BFm&output=embed"
  },
  2: {
    name: "Chi nhánh 2",
    address: "Địa chỉ chi nhánh 2",
    phone: "0900111222",
    time: "24/7",
    desc: "Giặt sấy tự động – tiện lợi – nhanh chóng.",
    image: "assets/branch/2/main.jpg",
    services: ["Giặt sấy", "Giao nhận"],
    map: "https://www.google.com/maps?q=H%C3%A0%20N%E1%BB%99i&output=embed"
  }
};

const id = new URLSearchParams(location.search).get("id") || 1;
const b = DATA[id];

if (!b) location.href = "index.html";

/* SEO */
document.title = b.name + " | the Wash Hub";
document.getElementById("seo-desc").content = b.desc;
document.getElementById("og-title").content = b.name;
document.getElementById("og-desc").content = b.desc;
document.getElementById("og-image").content = b.image;

/* CONTENT */
document.getElementById("branch-image").src = b.image;
document.getElementById("branch-name").innerText = b.name;
document.getElementById("branch-address").innerText = b.address;
document.getElementById("branch-time").innerText = b.time;

const phone = document.getElementById("branch-phone");
phone.innerText = b.phone;
phone.href = "tel:" + b.phone;

const ul = document.getElementById("branch-services");
b.services.forEach(s => {
  const li = document.createElement("li");
  li.innerText = s;
  ul.appendChild(li);
});

document.getElementById("branch-map").src = b.map;
