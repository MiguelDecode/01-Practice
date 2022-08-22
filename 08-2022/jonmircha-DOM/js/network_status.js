export default function networkStatus() {
  const isOnline = () => {
    const $div = document.createElement("div");

    if (navigator.onLine) {
      $div.textContent = "Conexión Reestablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexión perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    document.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => {
      document.body.removeChild($div);
    }, 2000);
  };
  window.addEventListener("online", (event) => isOnline());
  window.addEventListener("offline", (event) => isOnline());
}
