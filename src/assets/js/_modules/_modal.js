export default function () {

document.addEventListener("DOMContentLoaded", function () {
    const modalButtons = document.querySelectorAll('[data-modal]:not(.modal)');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal .close');
    const body = document.body;
    const modalBg = document.querySelector('.modal_bg');
  
    
    modalButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modalToShow = document.querySelector(`.modal[data-modal="${modalId}"]`);
        if (!modalToShow) return;
  
        modalToShow.classList.add('show');
        body.classList.add('noscroll'); 
        modalBg.classList.add('show');
      });
    });
  
    // 閉じる（×）
    closeButtons.forEach((button) => {
      button.addEventListener('click', function (e) {
        const modal = this.closest('.modal');
        if (!modal) return;
        modal.classList.remove('show');
        body.classList.remove('noscroll');
        modalBg.classList.remove('show');
      });
    });
  
    // モーダル外クリックで閉じる
    modals.forEach((modal) => {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.classList.remove('show');
          body.classList.remove('noscroll');
          modalBg.classList.remove('show');
        }
      });
    });
  
    // 背景クリックで閉じる（背景を使っている場合）
    if (modalBg) {
      modalBg.addEventListener('click', function () {
        document.querySelectorAll('.modal.show').forEach((m) => m.classList.remove('show'));
        body.classList.remove('noscroll');
        modalBg.classList.remove('show');
      });
    }
  });
  
   


}