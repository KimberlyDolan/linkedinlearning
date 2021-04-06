
const dresser = {
  name: "My dresser",
  volume: 30,
  color: "greeen",
  pocketNum: 15,
  size: {
    width: 26,
    height: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

 

