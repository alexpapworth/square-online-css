<script type="application/javascript">
  var w = window
  var d = document

  function setup() {
    for (var i = 1; i < 6; i++) {
      w['total'+i] = 0
      w['poller'+i] = 0
    }

    // Buttons
    w.interval1 = setInterval(pollAndApply, 100, '.w-button', 20, '1', 'button')
    // Logo
    w.interval2 = setInterval(pollAndApply, 100, '.w-sitelogo img', 20, '2', 'logo')
    // Navigation and Shop page Categories
    w.interval3 = setInterval(pollAndApply, 100, '.w-nav', 20, '3')
    // Filter dropdown
    w.interval4 = setInterval(pollAndApply, 100, '.select__container select', 20, '4')
    // Breadcrumbs
    w.interval5 = setInterval(pollAndApply, 100, '.crumb', 20, '5')
  }

  function clearAll() {
    for (var i = 1; i < 6; i++) {
      clearInterval(w['interval'+i])
    }
  }

  function pollAndApply(cssClass, pollCount, number, extraConfig) {
    if (d.querySelectorAll(cssClass).length == 0) {
      w['total'+number] += 1

      if (w['total'+number] > 100) {
        clearInterval(w['interval'+number])
      }

      return
    }
    else {
      if (w['poller'+number] < pollCount) {
        w['poller'+number] += 1
      }
      else {
        clearInterval(w['interval'+number])
      }

      if (extraConfig === "logo") {
        d.querySelector(cssClass).style.setProperty('--width', '190px')
        d.querySelector(cssClass).style.setProperty('--mobile-width', '140px')
      }
      else {
        for (var i = 0; i < d.querySelectorAll(cssClass).length; i++) {
          d.querySelectorAll(cssClass)[i].style.fontFamily = "var(--body-font)"

          if (extraConfig === 'button')
            d.querySelectorAll(cssClass)[i].style.fontWeight = "500"
        }
      }
    }
  }

  function retrigger() {
    clearAll()
    setup()
  }

  w.addEventListener('click', retrigger)

  setup()
</script>
