function createPetList() {
  // Tu código aquí 👈
  const petArray = [];

  function petInclude(petInfo) {
    if (petInfo) {
      petArray.push(petInfo);
    } else {
      console.log(petArray);
      return petArray;
    }
  }

  return petInclude;
}

  const myPetList = createPetList();

  myPetList("michi");
  myPetList("firulais");
  myPetList();