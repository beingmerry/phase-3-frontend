import { Card, ListGroup, Button } from "react-bootstrap";
import { MdDelete, MdEdit, MdShoppingBag } from "react-icons/md";

function StoreCard({ store, purchases, user, setPurchases}) {
  // const [purchasedItem, setPurchasedItem] = useState([]);

  const {item_name, review, star_rating, cost, store_id, user_id} = purchases

  const {
    store_name,
    item_1,
    item_2,
    item_3,
    item_4,
    item_1_cost,
    item_2_cost,
    item_3_cost,
    item_4_cost,
  } = store;
  // 🎯 Add in the purchase data underneath for the store

  // debugger
  const handlePurchase = (item_name, cost) => {
    // setPurchasedItem([]);

    const purchasedItem = {
      item_name: item_name,
      review: null,
      star_rating: null,
      cost: cost,
      store_id: store.id,
      user_id: user.id
    };
    // debugger
    fetch(`http://localhost:9292/purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchasedItem),
    })
    .then(response => response.json())
    .then(purchasedItem => {
      setPurchases([...purchases, purchasedItem])
    })
  };

  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title className="fs-6">
          {store_name}
          <Button size="sm" variant="secondary" className="float-end">
            {<MdEdit />}
          </Button>
          <Button size="sm" variant="danger" className="float-end">
            {<MdDelete />}
          </Button>
        </Card.Title>
        <br />
        <ListGroup>
          <ListGroup.Item>
            {item_1} ${item_1_cost}
            <Button id="1" size="sm" variant="success" className="float-end" onClick={e => handlePurchase(item_1, item_1_cost)}>
              {<MdShoppingBag />}
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            {item_2} ${item_2_cost}
            <Button id="2" size="sm" variant="success" className="float-end" onClick={e => handlePurchase(item_2, item_2_cost)}>
              {<MdShoppingBag />}
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            {item_3} ${item_3_cost}
            <Button id="3" size="sm" variant="success" className="float-end" onClick={e => handlePurchase(item_3, item_3_cost)}>
              {<MdShoppingBag />}
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            {item_4} ${item_4_cost}
            <Button id="4" size="sm" variant="success" className="float-end" onClick={e => handlePurchase(item_4, item_4_cost)}>
              {<MdShoppingBag />}
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default StoreCard;
