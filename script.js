document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".consultation-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from refreshing the page

    const name = form.querySelector('input[type="text"]').value.trim();
    const mobile = form.querySelector('input[type="tel"]').value.trim();
    const captcha = form.querySelector('.captcha-wrapper input').value.trim();
    const checkbox = form.querySelector('input[type="checkbox"]').checked;

    let errorMsg = "";

    // Validate name
    if (name === "") {
      errorMsg = "Please enter your name.";
    }
    // Validate phone number (basic 10-digit)
    else if (!/^[6-9]\d{9}$/.test(mobile)) {
      errorMsg = "Please enter a valid 10-digit Indian mobile number.";
    }
    // Validate captcha
    else if (captcha !== "1514") {
      errorMsg = "Incorrect captcha. Please try again.";
    }
    // Validate checkbox
    else if (!checkbox) {
      errorMsg = "Please agree to the terms and privacy policy.";
    }

    // Show result
    if (errorMsg !== "") {
      alert(errorMsg);
    } else {
      alert(" Thank you! Your free consultation has been booked.");
      form.reset(); 
    }
  });
});
