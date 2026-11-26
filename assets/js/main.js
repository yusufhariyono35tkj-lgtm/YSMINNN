/**
 * Interaksi dasar navigasi dan tombol salin username Instagram.
 */
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const copyBtn = document.getElementById("copyIgBtn");
  const igHandleEl = document.getElementById("igHandleText");
  const copyFeedback = document.getElementById("copyFeedback");

  if (copyBtn && igHandleEl && copyFeedback) {
    copyBtn.addEventListener("click", async () => {
      const handleText = igHandleEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(handleText);
        copyFeedback.textContent = "Username Instagram berhasil disalin ke papan klip.";
      } catch {
        copyFeedback.textContent = "Salin manual username: " + handleText;
      }
    });
  }
});
