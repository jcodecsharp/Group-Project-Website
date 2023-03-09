

let map;
let lastyearavg;
let thisyearavg;
let pricechangepercent = 0;

let zipcode_selecter = document.getElementById("zipcode_select")
let zipcode_selecter_value = zipcode_selecter.value
let zipcode_Submit_Button = document.getElementById("submit_zipcode_button");
let zipcode_yeartrend_button = document.getElementById("submit_yeartrend_button");
zipcode_Submit_Button.addEventListener("click", api_calls);
zipcode_yeartrend_button.addEventListener("click", year_api_call1);
zipcode_yeartrend_button.addEventListener("click", year_api_call2);
zipcode_yeartrend_button.addEventListener("click", pricechange);

let get_apicredits_button = document.getElementById("submit_apicredits_button");
get_apicredits_button.addEventListener("click", get_api_credits)

document.getElementById('zipcode_select').onchange = function () {
  zipcode_selecter_value = zipcode_selecter.value
  console.log(zipcode_selecter_value)
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 27.7567667, lng: -81.4639835 },
    zoom: 7,
    mapId: 'c7120f43ab9b088b',
    restriction: {
      latLngBounds: {
        north: 34.5,
        south: 24,
        east: -75,
        west: -89,
      },
    },
  });
  const Jacksonville = { lat: 30.3, lng: -81.7 };
  const Miami = { lat: 25.7617, lng: -80.1918 };
  const Tampa = { lat: 28.0, lng: -82.5 };
  const Orlando = { lat: 28.5, lng: -81.4 };
  const StPetersburg = { lat: 27.8, lng: -82.6 };
  const Hialeah = { lat: 25.8576, lng: -80.2781 };
  const PortStLucie = { lat: 27.3, lng: -80.4 };
  const Tallahasse = { lat: 30.46, lng: -84.28 };
  const FortLauderdale = { lat: 26.1, lng: -80.1 };
  const Hollywood = { lat: 26.0, lng: -80.2 };
  const Gainesville = { lat: 29.7, lng: -82.3 };
  const LehighAcres = { lat: 26.6253, lng: -81.6248 };
  const Clearwater = { lat: 27.9659, lng: -82.8001 };
  const Brandon = { lat: 27.9378, lng: -82.2859 };
  const Palmbay = { lat: 28.0345, lng: -80.5887 };
  const Springhill = { lat: 28.4823, lng: -82.5370 };
  const PompanoBeach = { lat: 26.2379, lng: -80.1248 };
  const WestPalmBeach = { lat: 26.7153, lng: -80.0534 };
  const Lakeland = { lat: 28.0395, lng: -81.9498 };
  const Riverview = { lat: 27.8661, lng: -82.3265 };
  const Bocaraton = { lat: 26.3683, lng: -80.1289 };
  const Ocala = { lat: 29.1872, lng: -82.1401 };
  const DaytonaBeach = { lat: 29.2108, lng: -81.0228 };
  const StAugustine = { lat: 29.9012, lng: -81.3124 };
  const PanamaCity = { lat: 30.1588, lng: -85.6602 };
  const Pensacola = { lat: 30.4213, lng: -87.2169 };
  const FortMyers = { lat: 26.6406, lng: -81.8723 };




  const m_Jacksonville = new google.maps.Marker({
    position: Jacksonville,
    map,
    animation: google.maps.Animation.DROP,
    icon: "img/jacksonvilleicon.png",
    title: "Jacksonville",
  });
  const m_Miami = new google.maps.Marker({
    position: Miami,
    icon: "img/miamiicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Miami",
  });
  const m_Tampa = new google.maps.Marker({
    position: Tampa,
    icon: "img/tampaicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Tampa",
  });
  const m_Orlando = new google.maps.Marker({
    position: Orlando,
    icon: "img/orlandoicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Orlando",
  });
  const m_StPetersburg = new google.maps.Marker({
    position: StPetersburg,
    icon: "img/stpetersburgicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "StPetersburg",
  });
  const m_Hialeah = new google.maps.Marker({
    position: Hialeah,
    icon: "img/hialeahicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Hialeah",
  });
  const m_PortStLucie = new google.maps.Marker({
    position: PortStLucie,
    icon: "img/portstlucieicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "PortStLucie",
  });
  const m_Tallahasse = new google.maps.Marker({
    position: Tallahasse,
    icon: "img/tallahasseeicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Tallahasse",
  });
  const m_FortLauderdale = new google.maps.Marker({
    position: FortLauderdale,
    icon: "img/fortlauderdaleicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "FortLauderdale",
  });
  const m_Hollywood = new google.maps.Marker({
    position: Hollywood,
    icon: "img/hollywoodicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Hollywood",
  });
  const m_Gainesville = new google.maps.Marker({
    position: Gainesville,
    icon: "img/gainesvilleicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Gainesville",
  });
  const m_LehighAcres = new google.maps.Marker({
    position: LehighAcres,
    icon: "img/lehighacresicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "LehighAcres",
  });
  const m_Clearwater = new google.maps.Marker({
    position: Clearwater,
    icon: "img/clearwatericon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Clearwater",
  });
  const m_Brandon = new google.maps.Marker({
    position: Brandon,
    icon: "img/brandonicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Brandon ",
  });
  const m_Palmbay = new google.maps.Marker({
    position: Palmbay,
    icon: "img/palmbayicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Palmbay",
  });
  const m_Springhill = new google.maps.Marker({
    position: Springhill,
    icon: "img/springhillicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "SpringHill",
  });
  const m_PompanoBeach = new google.maps.Marker({
    position: PompanoBeach,
    icon: "img/pompanobeachicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "PompanoBeach",
  });
  const m_WestPalmBeach = new google.maps.Marker({
    position: WestPalmBeach,
    icon: "img/westpalmbeachicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "WestPalmBeach",
  });
  const m_Lakeland = new google.maps.Marker({
    position: Lakeland,
    icon: "img/lakelandicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Lakeland",
  });
  const m_Riverview = new google.maps.Marker({
    position: Riverview,
    icon: "img/riverviewicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Riverview",
  });
  const m_Bocaraton = new google.maps.Marker({
    position: Bocaraton,
    icon: "img/bocaratonicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Bocaraton",
  });
  const m_Ocala = new google.maps.Marker({
    position: Ocala,
    icon: "img/ocalaicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Ocala",
  });
  const m_DaytonaBeach = new google.maps.Marker({
    position: DaytonaBeach,
    icon: "img/daytonabeachicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "DaytonaBeach",
  });
  const m_StAugustine = new google.maps.Marker({
    position: StAugustine,
    icon: "img/staugustineicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "StAugustine",
  });
  const m_PanamaCity = new google.maps.Marker({
    position: PanamaCity,
    icon: "img/panamacityicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "PanamaCity",
  });
  const m_Pensacola = new google.maps.Marker({
    position: Pensacola,
    icon: "img/pensacolaicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "Pensacola",
  });
  const m_FortMyers = new google.maps.Marker({
    position: FortMyers,
    icon: "img/ftmyersicon.png",
    animation: google.maps.Animation.DROP,
    map,
    title: "FortMyers",
  });

  var ajax = new XMLHttpRequest();
  var method = "GET";
  var url = "cityavg.php";
  var asynchronous = true;
  var data;
  var jville0BR;
  var jville1BR;
  var jville2BR;
  var jville3BR;
  var jville4BR;

  ajax.open(method, url, asynchronous);
  ajax.send();
  ajax.onreadystatechange = async function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log(data);
      info_Jacksonville = '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Jacksonville</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/jacksinfow.jpg' alt='Girl in a jacket' width='175' height='130'>" + "<p></p>" + "<p>Average Rent: $" + data[0]["avg"] + "</p> \n <p>0 bedroom: $" + data[0]["0BR"] + "</p> \n <p>1 bedroom: $" + data[0]["1BR"] + "</p> \n <p>2 bedroom: $" + data[0]["2BR"] + "</p> \n <p>3 bedroom: $" + data[0]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[0]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[0]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      let infowindow_Jacksonville = new google.maps.InfoWindow({
        content: info_Jacksonville,
      });
      m_Jacksonville.addListener("click", () => {
        infowindow_Jacksonville.open({
          anchor: m_Jacksonville,
          map,
          shouldFocus: true,
        });
      });
      let info_Miami =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Miami</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/MiamiInfoPic.jpg' alt='Miami Picture'>" +
        "<p>Average Rent: $" + data[1]["avg"] + "</p>  \n <p>0 bedroom: $" + data[1]["0BR"] + "</p> \n <p>1 bedroom: $" + data[1]["1BR"] + "</p> \n <p>2 bedroom: $" + data[1]["2BR"] + "</p> \n <p>3 bedroom: $" + data[1]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[1]["4BR"] + "</p><p>Change in rent from 2020 to 2021: " + data[1]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Miami = new google.maps.InfoWindow({
        content: info_Miami,
      });
      m_Miami.addListener("click", () => {
        infowindow_Miami.open({
          anchor: m_Miami,
          map,
          shouldFocus: false,
        });
      });
      let info_Tampa =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Tampa</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/TampaBayInfoPicture.jpg' alt='Tampa Bay Picture'>" +
        "<p>Average Rent: $" + data[2]["avg"] + "</p>  \n <p>0 bedroom: $" + data[2]["0BR"] + "</p> \n <p>1 bedroom: $" + data[2]["1BR"] + "</p> \n <p>2 bedroom: $" + data[2]["2BR"] + "</p> \n <p>3 bedroom: $" + data[2]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[2]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[2]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Tampa = new google.maps.InfoWindow({
        content: info_Tampa,
      });
      m_Tampa.addListener("click", () => {
        infowindow_Tampa.open({
          anchor: m_Tampa,
          map,
          shouldFocus: false,
        });
      });
      let info_Orlando =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Orlando</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/OrlandoInfoPic.jpg' alt='Orlando Picture'>" +
        "<p>Average Rent: $" + data[3]["avg"] + "</p>  \n <p>0 bedroom: $" + data[3]["0BR"] + "</p> \n <p>1 bedroom: $" + data[3]["1BR"] + "</p> \n <p>2 bedroom: $" + data[3]["2BR"] + "</p> \n <p>3 bedroom: $" + data[3]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[3]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[3]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Orlando = new google.maps.InfoWindow({
        content: info_Orlando,
      });
      m_Orlando.addListener("click", () => {
        infowindow_Orlando.open({
          anchor: m_Orlando,
          map,
          shouldFocus: false,
        });
      });
      const info_StPetersburg =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">St.Petersburg</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/SaintPetePicInfoWindow.jpg' alt='Saint Petersburg Picture'>" +
        "<p>Average Rent: $" + data[4]["avg"] + "</p>  \n <p>0 bedroom: $" + data[4]["0BR"] + "</p> \n <p>1 bedroom: $" + data[4]["1BR"] + "</p> \n <p>2 bedroom: $" + data[4]["2BR"] + "</p> \n <p>3 bedroom: $" + data[4]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[4]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[4]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_StPetersBurg = new google.maps.InfoWindow({
        content: info_StPetersburg,
      });
      m_StPetersburg.addListener("click", () => {
        infowindow_StPetersBurg.open({
          anchor: m_StPetersburg,
          map,
          shouldFocus: false,
        });
      });
      const info_Hialeah =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Hialeah</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/HialeahInfoImg.jpg' alt='Hialeah Picture'>" +
        "<p>Average Rent: $" + data[5]["avg"] + "</p>  \n <p>0 bedroom: $" + data[5]["0BR"] + "</p> \n <p>1 bedroom: $" + data[5]["1BR"] + "</p> \n <p>2 bedroom: $" + data[5]["2BR"] + "</p> \n <p>3 bedroom: $" + data[5]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[5]["4BR"] + "</p><p>Change in rent from 2020 to 2021: " + data[5]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Hialeah = new google.maps.InfoWindow({
        content: info_Hialeah,
      });
      m_Hialeah.addListener("click", () => {
        infowindow_Hialeah.open({
          anchor: m_Hialeah,
          map,
          shouldFocus: false,
        });
      });
      const info_PortStLucie =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Port St. Lucie</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/PortStLucieInfoPic.jpg' alt='PortSt Lucie Picture'>" +
        "<p>Average Rent: $" + data[6]["avg"] + "</p>  \n <p>0 bedroom: $" + data[6]["0BR"] + "</p> \n <p>1 bedroom: $" + data[6]["1BR"] + "</p> \n <p>2 bedroom: $" + data[6]["2BR"] + "</p> \n <p>3 bedroom: $" + data[6]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[6]["4BR"] + "</p><p>Change in rent from 2020 to 2021: " + data[6]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_PortStLucie = new google.maps.InfoWindow({
        content: info_PortStLucie,
      });
      m_PortStLucie.addListener("click", () => {
        infowindow_PortStLucie.open({
          anchor: m_PortStLucie,
          map,
          shouldFocus: false,
        });
      });
      const info_Tallahasse =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Tallahasse</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/TallahasseInfoPic.jpg' alt='Tallahasse Picture'>" +
        "<p>Average Rent: $" + data[7]["avg"] + "</p>  \n <p>0 bedroom: $" + data[7]["0BR"] + "</p> \n <p>1 bedroom: $" + data[7]["1BR"] + "</p> \n <p>2 bedroom: $" + data[7]["2BR"] + "</p> \n <p>3 bedroom: $" + data[7]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[7]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[7]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Tallahasse = new google.maps.InfoWindow({
        content: info_Tallahasse,
      });
      m_Tallahasse.addListener("click", () => {
        infowindow_Tallahasse.open({
          anchor: m_Tallahasse,
          map,
          shouldFocus: false,
        });
      });
      const info_FortLauderdale =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Fort Lauderdale</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/FortLauderdaleInfoPic.jpg' alt='Fort Lauderdale Picture'>" +
        "<p>Average Rent: $" + data[8]["avg"] + "</p>  \n <p>0 bedroom: $" + data[8]["0BR"] + "</p> \n <p>1 bedroom: $" + data[8]["1BR"] + "</p> \n <p>2 bedroom: $" + data[8]["2BR"] + "</p> \n <p>3 bedroom: $" + data[8]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[8]["4BR"] + "</p><p>Change in rent from 2020 to 2021: " + data[8]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_FortLauderdale = new google.maps.InfoWindow({
        content: info_FortLauderdale,
      });
      m_FortLauderdale.addListener("click", () => {
        infowindow_FortLauderdale.open({
          anchor: m_FortLauderdale,
          map,
          shouldFocus: false,
        });
      });
      const info_Hollywood =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Hollywood</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/HollyWoodFloridaInfoPic.jpg' alt='Hollywood Florida Picture'>" +
        "<p>Average Rent: $" + data[9]["avg"] + "</p>  \n <p>0 bedroom: $" + data[9]["0BR"] + "</p> \n <p>1 bedroom: $" + data[9]["1BR"] + "</p> \n <p>2 bedroom: $" + data[9]["2BR"] + "</p> \n <p>3 bedroom: $" + data[9]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[9]["4BR"] + "</p><p>Change in rent from 2020 to 2021: " + data[9]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Hollywood = new google.maps.InfoWindow({
        content: info_Hollywood,
      });
      m_Hollywood.addListener("click", () => {
        infowindow_Hollywood.open({
          anchor: m_Hollywood,
          map,
          shouldFocus: false,
        });
      });
      const info_Gainesville =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Gainesville</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/GainesvilleInfoPic.jpg' alt='Gainesville Picture'>" +
        "<p>Average Rent: $" + data[10]["avg"] + "</p>  \n <p>0 bedroom: $" + data[10]["0BR"] + "</p> \n <p>1 bedroom: $" + data[10]["1BR"] + "</p> \n <p>2 bedroom: $" + data[10]["2BR"] + "</p> \n <p>3 bedroom: $" + data[10]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[10]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[10]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Gainesville = new google.maps.InfoWindow({
        content: info_Gainesville,
      });
      m_Gainesville.addListener("click", () => {
        infowindow_Gainesville.open({
          anchor: m_Gainesville,
          map,
          shouldFocus: false,
        });
      });
      const info_LehighAcres =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Lehigh Acres</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/LehighAcresInfoPic.png' alt='Lehigh Acres Picture'>" +
        "<p>Average Rent: $" + data[11]["avg"] + "</p>  \n <p>0 bedroom: $" + data[11]["0BR"] + "</p> \n <p>1 bedroom: $" + data[11]["1BR"] + "</p> \n <p>2 bedroom: $" + data[11]["2BR"] + "</p> \n <p>3 bedroom: $" + data[11]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[11]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[11]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_LehighAcres = new google.maps.InfoWindow({
        content: info_LehighAcres,
      });
      m_LehighAcres.addListener("click", () => {
        infowindow_LehighAcres.open({
          anchor: m_LehighAcres,
          map,
          shouldFocus: false,
        });
      });
      const info_Clearwater =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Clearwater</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/ClearwaterInfoPic.jpg' alt='Clearwater Picture'>" +
        "<p>Average Rent: $" + data[12]["avg"] + "</p>  \n <p>0 bedroom: $" + data[12]["0BR"] + "</p> \n <p>1 bedroom: $" + data[12]["1BR"] + "</p> \n <p>2 bedroom: $" + data[12]["2BR"] + "</p> \n <p>3 bedroom: $" + data[12]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[12]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[12]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Clearwater = new google.maps.InfoWindow({
        content: info_Clearwater,
      });
      m_Clearwater.addListener("click", () => {
        infowindow_Clearwater.open({
          anchor: m_Clearwater,
          map,
          shouldFocus: false,
        });
      });
      const info_Brandon =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Brandon</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/BrandonInfoPic.jpg' alt='Brandon Florida Picture'>" +
        "<p>Average Rent: $" + data[13]["avg"] + "</p>  \n <p>0 bedroom: $" + data[13]["0BR"] + "</p> \n <p>1 bedroom: $" + data[13]["1BR"] + "</p> \n <p>2 bedroom: $" + data[13]["2BR"] + "</p> \n <p>3 bedroom: $" + data[13]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[13]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[13]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Brandon = new google.maps.InfoWindow({
        content: info_Brandon,
      });
      m_Brandon.addListener("click", () => {
        infowindow_Brandon.open({
          anchor: m_Brandon,
          map,
          shouldFocus: false,
        });
      });
      const info_Palmbay =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Palmbay</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/PalmbayInfoPic.jpg' alt='Palm Bay Picture'>" +
        "<p>Average Rent: $" + data[14]["avg"] + "</p>  \n <p>0 bedroom: $" + data[14]["0BR"] + "</p> \n <p>1 bedroom: $" + data[14]["1BR"] + "</p> \n <p>2 bedroom: $" + data[14]["2BR"] + "</p> \n <p>3 bedroom: $" + data[14]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[14]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[14]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Palmbay = new google.maps.InfoWindow({
        content: info_Palmbay,
      });
      m_Palmbay.addListener("click", () => {
        infowindow_Palmbay.open({
          anchor: m_Palmbay,
          map,
          shouldFocus: false,
        });
      });
      const info_Springhill =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Springhill</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/SpringHillInfoPic.jpg' alt='Spring Hill Picture'>" +
        "<p>Average Rent: $" + data[15]["avg"] + "</p>  \n <p>0 bedroom: $" + data[15]["0BR"] + "</p> \n <p>1 bedroom: $" + data[15]["1BR"] + "</p> \n <p>2 bedroom: $" + data[15]["2BR"] + "</p> \n <p>3 bedroom: $" + data[15]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[15]["4BR"] + "</p<p>Change in rent from 2020 to 2021: +" + data[15]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Springhill = new google.maps.InfoWindow({
        content: info_Springhill,
      });
      m_Springhill.addListener("click", () => {
        infowindow_Springhill.open({
          anchor: m_Springhill,
          map,
          shouldFocus: false,
        });
      });
      const info_PompanoBeach =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Pompano Beach</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/PompanoBeachInfoPic.jpg' alt='Pompano Beach Picture'>" +
        "<p>Average Rent: $" + data[16]["avg"] + "</p>  \n <p>0 bedroom: $" + data[16]["0BR"] + "</p> \n <p>1 bedroom: $" + data[16]["1BR"] + "</p> \n <p>2 bedroom: $" + data[16]["2BR"] + "</p> \n <p>3 bedroom: $" + data[16]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[16]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[16]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_PompanoBeach = new google.maps.InfoWindow({
        content: info_PompanoBeach,
      });
      m_PompanoBeach.addListener("click", () => {
        infowindow_PompanoBeach.open({
          anchor: m_PompanoBeach,
          map,
          shouldFocus: false,
        });
      });
      const info_WestPalmBeach =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">West Palm Beach</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/WestPalmBeachInfoPic.jpg' alt='West Palm Beach Picture'>" +
        "<p>Average Rent: $" + data[17]["avg"] + "</p>  \n <p>0 bedroom: $" + data[17]["0BR"] + "</p> \n <p>1 bedroom: $" + data[17]["1BR"] + "</p> \n <p>2 bedroom: $" + data[17]["2BR"] + "</p> \n <p>3 bedroom: $" + data[17]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[17]["4BR"] + "</p><p>Change in rent from 2020 to 2021: " + data[17]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_WestPalmBeach = new google.maps.InfoWindow({
        content: info_WestPalmBeach,
      });
      m_WestPalmBeach.addListener("click", () => {
        infowindow_WestPalmBeach.open({
          anchor: m_WestPalmBeach,
          map,
          shouldFocus: false,
        });
      });
      const info_Lakeland =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Lakeland</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/LakeLandInfoPic.png' alt='Lakeland Florida Picture'>" +
        "<p>Average Rent: $" + data[18]["avg"] + "</p>  \n <p>0 bedroom: $" + data[18]["0BR"] + "</p> \n <p>1 bedroom: $" + data[18]["1BR"] + "</p> \n <p>2 bedroom: $" + data[18]["2BR"] + "</p> \n <p>3 bedroom: $" + data[18]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[18]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[18]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Lakeland = new google.maps.InfoWindow({
        content: info_Lakeland,
      });
      m_Lakeland.addListener("click", () => {
        infowindow_Lakeland.open({
          anchor: m_Lakeland,
          map,
          shouldFocus: false,
        });
      });
      const info_Riverview =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Riverview</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/RiverviewInfoPic.jpg' alt='Riverview Florida Picture'>" +
        "<p>Average Rent: $" + data[19]["avg"] + "</p>  \n <p>0 bedroom: $" + data[19]["0BR"] + "</p> \n <p>1 bedroom: $" + data[19]["1BR"] + "</p> \n <p>2 bedroom: $" + data[19]["2BR"] + "</p> \n <p>3 bedroom: $" + data[19]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[19]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[19]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Riverview = new google.maps.InfoWindow({
        content: info_Riverview,
      });
      m_Riverview.addListener("click", () => {
        infowindow_Riverview.open({
          anchor: m_Riverview,
          map,
          shouldFocus: false,
        });
      });
      const info_BocaRaton =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Boca Raton</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/BocaRatonInfoWindow.jpg' alt='Boca Raton Picture'>" +
        "<p>Average Rent: $" + data[20]["avg"] + "</p>  \n <p>0 bedroom: $" + data[20]["0BR"] + "</p> \n <p>1 bedroom: $" + data[20]["1BR"] + "</p> \n <p>2 bedroom: $" + data[20]["2BR"] + "</p> \n <p>3 bedroom: $" + data[20]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[20]["4BR"] + "</p><p>Change in rent from 2020 to 2021: " + data[20]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_BocaRaton = new google.maps.InfoWindow({
        content: info_BocaRaton,
      });
      m_Bocaraton.addListener("click", () => {
        infowindow_BocaRaton.open({
          anchor: m_Bocaraton,
          map,
          shouldFocus: false,
        });
      });
      const info_Ocala =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Ocala</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/OcalaFLInfoWindow.jpg' alt='Ocala FL Picture'>" +
        "<p>Average Rent: $" + data[21]["avg"] + "</p>  \n <p>0 bedroom: $" + data[21]["0BR"] + "</p> \n <p>1 bedroom: $" + data[21]["1BR"] + "</p> \n <p>2 bedroom: $" + data[21]["2BR"] + "</p> \n <p>3 bedroom: $" + data[21]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[21]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[21]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Ocala = new google.maps.InfoWindow({
        content: info_Ocala,
      });
      m_Ocala.addListener("click", () => {
        infowindow_Ocala.open({
          anchor: m_Ocala,
          map,
          shouldFocus: false,
        });
      });
      const info_DaytonaBeach =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Daytona Beach</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/DaytonaBeachInfoPic.jpg' alt='Ocala FL Picture'>" +
        "<p>Average Rent: $" + data[22]["avg"] + "</p>  \n <p>0 bedroom: $" + data[22]["0BR"] + "</p> \n <p>1 bedroom: $" + data[22]["1BR"] + "</p> \n <p>2 bedroom: $" + data[22]["2BR"] + "</p> \n <p>3 bedroom: $" + data[22]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[22]["4BR"] + "</p><p>Change in rent from 2020 to 2021: " + data[22]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_DaytonaBeach = new google.maps.InfoWindow({
        content: info_DaytonaBeach,
      });
      m_DaytonaBeach.addListener("click", () => {
        infowindow_DaytonaBeach.open({
          anchor: m_DaytonaBeach,
          map,
          shouldFocus: false,
        });
      });
      const info_StAugustine =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">St. Augustine</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/StAugustineInfoWindow.jpg' alt='StAugustine FL Picture'>" +
        "<p>Average Rent: $" + data[23]["avg"] + "</p>  \n <p>0 bedroom: $" + data[23]["0BR"] + "</p> \n <p>1 bedroom: $" + data[23]["1BR"] + "</p> \n <p>2 bedroom: $" + data[23]["2BR"] + "</p> \n <p>3 bedroom: $" + data[23]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[23]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[23]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_StAugustine = new google.maps.InfoWindow({
        content: info_StAugustine,
      });
      m_StAugustine.addListener("click", () => {
        infowindow_StAugustine.open({
          anchor: m_StAugustine,
          map,
          shouldFocus: false,
        });
      });
      const info_PanamaCity =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Panama City</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/PanamaCityInfoWindow.jpg' alt='Panama City FL Picture'>" +
        "<p>Average Rent: $" + data[24]["avg"] + "</p>  \n <p>0 bedroom: $" + data[24]["0BR"] + "</p> \n <p>1 bedroom: $" + data[24]["1BR"] + "</p> \n <p>2 bedroom: $" + data[24]["2BR"] + "</p> \n <p>3 bedroom: $" + data[24]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[24]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[24]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_PanamaCity = new google.maps.InfoWindow({
        content: info_PanamaCity,
      });
      m_PanamaCity.addListener("click", () => {
        infowindow_PanamaCity.open({
          anchor: m_PanamaCity,
          map,
          shouldFocus: false,
        });
      });
      const info_FortMyers =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Fort Myers</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/FortMyersInfoWindow.jpg' alt='Fort Myers FL Picture'>" +
        "<p>Average Rent: $" + data[25]["avg"] + "</p>  \n <p>0 bedroom: $" + data[25]["0BR"] + "</p> \n <p>1 bedroom: $" + data[25]["1BR"] + "</p> \n <p>2 bedroom: $" + data[25]["2BR"] + "</p> \n <p>3 bedroom: $" + data[25]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[25]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[25]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_FortMyers = new google.maps.InfoWindow({
        content: info_FortMyers,
      });
      m_FortMyers.addListener("click", () => {
        infowindow_FortMyers.open({
          anchor: m_FortMyers,
          map,
          shouldFocus: false,
        });
      });
      const info_Pensacola =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Pensacola</h1>' +
        '<div id="bodyContent">' +
        "<img src='img/PensacolaInfoWindowPic.jpg' alt='Pensacola FL Picture' width = '175' height = '130'>" +
        "<p>Average Rent: $" + data[26]["avg"] + "</p>  \n <p>0 bedroom: $" + data[26]["0BR"] + "</p> \n <p>1 bedroom: $" + data[26]["1BR"] + "</p> \n <p>2 bedroom: $" + data[26]["2BR"] + "</p> \n <p>3 bedroom: $" + data[26]["3BR"] + " </p> \n" +
        "<p>4 bedroom: $" + data[26]["4BR"] + "</p><p>Change in rent from 2020 to 2021: +" + data[26]["percent_delta_20to21"] + "%</p>"
      "</div>" +
        "</div>";
      const infowindow_Pensacola = new google.maps.InfoWindow({
        content: info_Pensacola,
      });
      m_Pensacola.addListener("click", () => {
        infowindow_Pensacola.open({
          anchor: m_Pensacola,
          map,
          shouldFocus: false,
        });
      });
    }

  }




}







function get_api_credits() {
  jQuery.ajax({
    url: "https://www.rentometer.com/api/v1/auth",
    type: "GET",
    data: {
      "api_key": "4_HAGZ7o7Sw6FUqagGVrOg",
    },
  })
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      alert("Testing fetching data from API \nmy account email is: " + data.account_email +
        "\nand I have " + data.credits_remaining + " credits remaining!")

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });

}
function api_calls() {
  jQuery.ajax({
    url: "https://www.rentometer.com/api/v1/summary",
    type: "GET",
    data: {
      "api_key": "gMIZX7yK85rmOa8orJmeoA",
      "address": zipcode_selecter_value,
      "bedrooms": "2",
      "baths": "1.5+",
      "building_type": "apartment",
      "look_back_days": 365,
    },
  })
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      alert("Average rent for this zipcode is: " + data.mean + "$")
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });
}

function year_api_call1() {
  jQuery.ajax({
    url: "https://www.rentometer.com/api/v1/summary",
    type: "GET",
    data: {
      "api_key": "gMIZX7yK85rmOa8orJmeoA",
      "address": zipcode_selecter_value,
      "bedrooms": "2",
      "baths": "1.5+",
      "building_type": "apartment",
      "look_back_days": 445,
    },
  })
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      lastyearavg = data.mean;
      console.log(lastyearavg);


    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });

}
function year_api_call2() {
  jQuery.ajax({
    url: "https://www.rentometer.com/api/v1/summary",
    type: "GET",
    data: {
      "api_key": "gMIZX7yK85rmOa8orJmeoA",
      "address": zipcode_selecter_value,
      "bedrooms": "2",
      "baths": "1.5+",
      "building_type": "apartment",
      "look_back_days": 90,
    },
  })
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      thisyearavg = data.mean;
      console.log(thisyearavg);
      pricechangepercent = thisyearavg / lastyearavg;
      console.log(pricechangepercent);
      pricechangepercent = ((pricechangepercent - 1) * 100);
      console.log(pricechangepercent);


    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });


}
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time)
  )
}
async function pricechange() {
  await sleep(2000);
  alert("Rental Change From Last Year is: " + pricechangepercent + "%");
}
