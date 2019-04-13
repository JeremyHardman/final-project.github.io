function getfresnoTempleInfo() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText)
      var i = ''

      document.getElementById('name').innerHTML = myArr.temples[0].name
      document.getElementById('address').innerHTML = myArr.temples[0].address
      document.getElementById('country').innerHTML = myArr.temples[0].country
      document.getElementById('telephone').innerHTML =
        myArr.temples[0].telephone
      document.getElementById('services').innerHTML = myArr.temples[0].services
      document.getElementById('templework').innerHTML =
        myArr.temples[0].templework
      document.getElementById('templedays').innerHTML =
        myArr.temples[0].templedays
      document.getElementById('closures').innerHTML = myArr.temples[0].closures
      document.getElementById('milestones').innerHTML =
        myArr.temples[0].milestones
    }
  }
  xmlhttp.open('GET', 'directory/shortList.json', true)
  xmlhttp.send()
}
