let mainFunc = async () => {
  let response = await fetch("https://kontests.net/api/v1/all");
  let contests = await response.json();
  console.log(contests);
  let ihtml = "";
  let imageIndex = 0;
  for (let index in contests) {
    imageIndex = Math.floor(Math.random() * 10);
    ihtml += `<div class="card" style="width: 18rem; margin : 0px 15px 30px 15px">
        <img src=${imagesArray[imageIndex]} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[index].name}</h5>
          <p class="card-text">Start Time : ${contests[index].start_time}</p>
          <p class="card-text">End Time : ${contests[index].start_time}</p>
          <p class="card-text">Duration : ${contests[index].duration}</p>
          <p class="card-text">Status: ${contests[index].status}</p>
          <a href="${contests[index].url}" class="btn btn-secondary">Visit the Contest</a>
        </div>
      </div>`;
  }
  var myCards = document.getElementById("myDiv");
  myCards.innerHTML = ihtml;
};

var imagesArray = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
];

mainFunc();
