
<div className="elon-title">
<h2>Items</h2>
<h2>{htmlDecode(Object.keys(groups)[1])}</h2>
<div className="tableau-head">
    <div>S/N</div>
    <div>Item name</div>
    <div>Price</div>
    <div>Quantity</div>
    <div>Total</div>
    <div></div>
</div>
{
    cartitems.length < 1 ? 
    
    <div className="empty">
        Cart is empty
    </div> 
    
    :
    cartitems.map(({id, product, price,quantity}, i)=>(
        <div className="tableau" key={id}>
            <div>{i+1}</div>
            <div>{product.substr(0,15) + '...'}</div>
            <div>{parseInt(price)}</div>
            <div><span  onClick={(e)=>reduce(id)}>-</span><span>{quantity}</span> <span onClick={(e)=>add(id)}>+</span></div>
            <div>{quantity*price}</div>
            <div title="Remove item" style={{color:'red'}}onClick={(e)=>remove(i)}><FontAwesomeIcon icon={faTrash} /> Remove</div>
        </div>
    ))
}
<div className="grand">Grand total = <FontAwesomeIcon icon={faNairaSign} />{sum}</div>

</div>