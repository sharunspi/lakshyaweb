window.onload = function () {
  function controlCurrent() {
    var current = document.getElementsByClassName('slider__images-item--active')[0].getAttribute('data-id');
    console.log('triggered');
    for( i = 1;i<=13;i++){
      if(i!=current)
        document.getElementById('e'+i).style.zIndex = '1000';
      else{
        document.getElementById('e'+i).style.zIndex = '10000';
        console.log('e'+i);
    }}

  }
};
