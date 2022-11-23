export default function userDeviceInfo(id) {
  const $id = document.getElementById(id);
  const isMobile = {
    android: () => navigator.userAgent.match(/android/i),
    ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
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
    ie: () => navigator.userAgent.match(/msie|iemobile/i),
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

  $id.innerHTML = `
<ul>
<li>UserAgent: <b>${navigator.userAgent}</b></li>
<li>Platform: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
<li>Navigator: <b>${isBrowser.any()}</b></li>
</ul>
`;

  // Contenido Exclusivo
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo es visible en chrome</mark></p>`;
  }
}
