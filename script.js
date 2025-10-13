// =======================
// A. Validation Form
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#lienhe form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn gửi form mặc định

    const name = form.hoten.value.trim();
    const email = form.email.value.trim();
    const content = form.noidung.value.trim();

    // Biểu thức Regex kiểm tra email hợp lệ
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      alert("Vui lòng nhập họ tên!");
      form.hoten.focus();
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Email không hợp lệ! Vui lòng nhập đúng định dạng.");
      form.email.focus();
      return;
    }

    if (content.length < 10) {
      alert("Nội dung góp ý phải có ít nhất 10 ký tự!");
      form.noidung.focus();
      return;
    }

    alert("Gửi thông tin thành công! Cảm ơn bạn đã liên hệ.");
    form.reset();
  });

  // =======================
  // B. Xử lý checkbox “Hoàn thành mục tiêu”
  // =======================
  const checkboxes = document.querySelectorAll("table input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const row = checkbox.closest("tr");
      if (checkbox.checked) {
        row.style.backgroundColor = "#c6f5c6";
        row.style.textDecoration = "line-through";
      } else {
        row.style.backgroundColor = "";
        row.style.textDecoration = "none";
      }
    });
  });

  // =======================
  // C. Hiệu ứng ảnh đại diện
  // =======================
  const avatar = document.querySelector("#gioithieu img");
  if (avatar) {
    avatar.addEventListener("mouseover", () => {
      avatar.style.transform = "scale(1.05)";
      avatar.style.transition = "transform 0.3s ease";
      avatar.style.border = "4px solid #ff6f91";
    });

    avatar.addEventListener("mouseout", () => {
      avatar.style.transform = "scale(1)";
      avatar.style.border = "none";
    });
  }

  // =======================
  // D. Nút “Lên đầu trang”
  // =======================
  const topButton = document.createElement("button");
  topButton.textContent = "⬆ Lên đầu trang";
  topButton.id = "backToTop";
  document.body.appendChild(topButton);

  // Style nhanh cho nút
  topButton.style.position = "fixed";
  topButton.style.bottom = "30px";
  topButton.style.right = "30px";
  topButton.style.padding = "10px 15px";
  topButton.style.background = "#d4f2f4";
  topButton.style.color = "#0b0848";
  topButton.style.fontWeight = "bold";
  topButton.style.border = "none";
  topButton.style.borderRadius = "10px";
  topButton.style.cursor = "pointer";
  topButton.style.display = "none";
  topButton.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

  // Khi cuộn xuống >300px mới hiện nút
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  });

  // Khi click thì cuộn lên đầu
  topButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
