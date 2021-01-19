<script type="application/javascript">
  var w = window
  var doc = document

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
    // Price
    w.interval5 = setInterval(pollAndApply, 100, '.product-price__wrapper', 20, '6', 'price')
  }

  function clearAll() {
    for (var i = 1; i < 6; i++) {
      clearInterval(w['interval'+i])
    }
  }

  function pollAndApply(cssClass, pollCount, number, extraConfig) {
    if (doc.querySelectorAll(cssClass).length == 0) {
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
        doc.querySelector(cssClass).style.setProperty('--width', '190px')
        doc.querySelector(cssClass).style.setProperty('--mobile-width', '140px')
      }
      else {
        for (var i = 0; i < doc.querySelectorAll(cssClass).length; i++) {
          doc.querySelectorAll(cssClass)[i].style.fontFamily = "var(--body-font)"

          if (extraConfig === 'button')
            doc.querySelectorAll(cssClass)[i].style.fontWeight = "500"

          if (extraConfig === 'price')
            doc.querySelectorAll(cssClass)[i].style.fontSize = "12px"
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
