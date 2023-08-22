export function getImageUrl(person, size = "s") {
  return (
    "https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI=" +
    person.imageId +
    size +
    ".jpg"
  );
}
