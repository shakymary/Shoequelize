$(document).ready(function () {
  $("footer").html(
    `
    <footer class="page-footer pink darken-4">
    <div class="row">
      <div class="col s12 offset-m1 m3 offset-l1 l3">
        <span id="followus">FOLLOW US</span><span></span>
        <span id="followus"><a class="blue-grey-text text-lighten-1" href="#!">
        <span style="font-size: 36px; color: White;">
        <i class="fab fa-twitter"></i></span></a></span>

        <span id="followus"><a class="blue-grey-text text-lighten-1" href="#!">
        <span span style="font-size: 36px; color: White;">
        <i class="fab fa-facebook"></i></span></a></span>

        <span id="followus"><a class="blue-grey-text text-lighten-1" href="#!">
        <span style="font-size: 36px; color: White;">
        <i class="fab fa-instagram"></i></span></a></span>
      </div>

      <div class="col s12 m3 l4">
        <h6 class="white-text">ABOUT US</h6>
        <p class="white-text text-lighten-1">About Shoequelize</p> 
        <p class="white-text text-lighten-1">Press</p>         
        <p class="white-text text-lighten-1">Our collections</p>
        <p class="white-text text-lighten-1">Contact us</p>
      </div>

      <div class="col s12 m3 l4">
        <h6 class="white-text">HELP</h6>
        <p class="white-text text-lighten-1">Account</p>  
        <p class="white-text text-lighten-1">Shipping</p>       
        <p class="white-text text-lighten-1">Billing & payments</p>
        <p class="white-text text-lighten-1">Product guidelines</p>
      </div>
    </div>
    <div class="footer-copyright pink lighten-5">
      <div class="row">
        <p class="blue-grey-text dark"> © 2020 Shoequelize, All rights reserved.</p>
      </div>
    </div>
    </footer>
  `
  );
});
