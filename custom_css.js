<script type="application/javascript">
    var customCSSInterval = setInterval(customCSS, 100);
    var totalCount = 0;

    function customCSS() {
      if (document.querySelectorAll('.w-button').length == 0) {
        console.log("Polling for elements")
        return
      }
      else {
        if (totalCount < 10) {
          totalCount += 1;
        }
        else {
          clearInterval(customCSSInterval);
        }

        // Buttons
        for (var i = 0; i < document.querySelectorAll('.w-button').length; i++) {
          document.querySelectorAll('.w-button')[i].style.fontFamily = "var(--body-font)";
          document.querySelectorAll('.w-button')[i].style.fontWeight = "500";
        }

        // Logo
        document.querySelector('.w-sitelogo img').style.setProperty('--width', '190px')
        document.querySelector('.w-sitelogo img').style.setProperty('--mobile-width', '140px')

        // Navigation and Shop page Categories
        for (var i = 0; i < document.querySelectorAll('.w-nav').length; i++) {
          document.querySelectorAll('.w-nav')[i].style.fontFamily = "var(--body-font)";
        }

        // Filter dropdown
        for (var i = 0; i < document.querySelectorAll('.select__container select').length; i++) {
          document.querySelectorAll('.select__container select')[i].style.fontFamily = "var(--body-font)";
        }

        console.log("Custom styling applied")
      }
    }

    function retriggerCustomCSS() {
      clearInterval(customCSSInterval);

      customCSSInterval = setInterval(customCSS, 100);
      totalCount = 0;

      customCSS();
    }

    window.addEventListener('click', retriggerCustomCSS);
</script>
