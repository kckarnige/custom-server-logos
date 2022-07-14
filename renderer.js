const container_class = "container-1-ERn5";
const logoid = "CustomServerLogos-logo";
let intrvl;

var injectScript = function () {
  const style = document.createElement('style');
  style.textContent = "@import url('https://kckarnige.is-a.dev/custom-server-logos/base.css');";
  style.id = "CustomServerLogos";
  document.head.append(style);
  intrvl = setInterval(function () {
    if (!(window.location.pathname.split('/')[2] == "@me")) {
      if (!(document.getElementsByClassName(container_class)[0].hasAttribute('data-guild-id'))) {
        document.getElementsByClassName(container_class)[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
        document.getElementsByClassName(container_class)[0].id = logoid;
        log(`Custom Server Logos [Kernel Mod] | Injected guild ID attribute!`);
      }
    };
  }, 1);
};


var removeScript = function () {
  clearInterval(intrvl);
  var removeData = document.getElementById("CustomServerLogos");
  removeData.parentNode.removeChild(removeData);
  document.getElementById(logoid).removeAttribute("data-guild-id");
  document.getElementById(logoid).removeAttribute("id", logoid);
};


// Sacred saus



export default {
  start() {
    injectScript();
  },
  stop() {
    removeScript();
  }
};
