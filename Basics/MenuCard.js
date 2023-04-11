import React from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'
import './style.css';


function OP () {
  if (navigator.share) {
      navigator.share({
          text : 'please read this great article : ',
          url:'https://google.com'
      }).then (() => {
          console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
      window.alert("Hii")
  }
}

const MenuCard = (props) => {
  return (
    <>
    <section className="main-card--container">

    {props.dataBaby.map((curEle) => {
            return (
                <>

<div className="flex">
      <div  className="mx-2 my-3 row row-cols-1 row-cols-md-3 g-4">
      <div  className="container-fluid">
        <div  className="mx-2 my-3 row row-cols-1 row-cols-md-3 g-4">
          <div   className="col">
            <div id='bgid' 
              className="card border mb-5"
              style={{ width: "18rem", height: "20rem"}}
            >
              <img  id="boarder"
              src={curEle.image}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", height:"50%"}}
              />
              <div id="boarder" style={{"backgroundColor":"whitesmoke"}} className="card-body">
                <p style={{"textAlign":"center", "color":"black", "fontSize":"18px", "paddingTop":"auto","paddingBottom":"auto"}} className="card-text">
                         {/* {curEle.title} */}
                </p>

                
                <div class="d-flex justify-content-between" id="twobtns">
                  
                    <button formAction='/python' formMethod='get' onClick={OP}  id="btn" type="button" class="btn btn-success">Share on Socials</button>
                    <button type="button" class="btn btn-success" >Download</button>
                
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </>   

            )
        })
    } 
 </section>
    </>
  )
}

export default MenuCard;

