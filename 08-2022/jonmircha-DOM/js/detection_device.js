export default function userDeviceInfo(id) {
  const $id = document.getElementById(id);

  const isMobile = {
    android: () => navigator.userAgent.match(/android/i),
    ios: () => navigator.userAgent.match(/iphone/i),
    windows: () => navigator.userAgent.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };

  const isDesktop = {
    linux: () => navigator.userAgent.match(/linux/i),
    mac: () => navigator.userAgent.match(/mac os/i),
    windows: () => navigator.userAgent.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };

  const isBrowser = {
    chrome: () => navigator.userAgent.match(/chrome/i),
    safari: () => navigator.userAgent.match(/safari/i),
    firefox: () => navigator.userAgent.match(/firefox/i),
    opera: () => navigator.userAgent.match(/opera/i),
    ie: () => navigator.userAgent.match(/msie/i),
    edge: () => navigator.userAgent.match(/edge/i),
    any: function () {
      return (
        this.ie() ||
        this.edge() ||
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera()
      );
    },
  };

  /* console.log(navigator.userAgent);
  console.log(isMobile.android());
  console.log(isMobile.ios());
  console.log(isMobile.any());
  console.log(isDesktop.linux());
  console.log(isDesktop.any());
  console.log(isBrowser.chrome());
  console.log(isBrowser.any()); */

  $id.innerHTML = `
  <ul>
    <li>UserAgent: <b>${navigator.userAgent}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `;
}
