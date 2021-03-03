import React, { useEffect, useState } from "react";
import "./Projects.css";
import shoppingapp from "../../shoppingapp.png";

const Project = () => {
  useEffect(() => {
    align_cards();
  }, []);

  let children;
  let container;

  window.addEventListener("resize", () => {
    align_cards();
  });

  const align_cards = () => {
    container = document.querySelector(".Project");
    children = container.children;
    // console.log(children);
    for (let i = 0; i < children.length; i++) {
      const card_child = children[i].children;

      console.log(window.innerWidth);
      if (window.innerWidth < 500) {
        card_child[0].style.width = "100%";
        card_child[1].style.width = "100%";

        card_child[0].style.float = "none";
        card_child[1].style.float = "none";
      } else {
        if (i % 2 === 0) {
          console.log(card_child[0]);
          card_child[0].style.float = "right";
          card_child[1].style.float = "left";
        } else {
          card_child[1].style.float = "right";
          card_child[0].style.float = "left";
        }
      }
    }
  };

  return (
    <div className="Project">
      {/*1 facebook clone */}
      <div className="left card">
        <div className="image ">image</div>
        <div className="desc ">
          <div>
            <div className="para">
              <h2>Facebook Clone</h2>
              <p>
                A facebook clone with the basic functionalities of login,
                signup, create-post, edit-post, comment, like, add-friends, and
                chat.
              </p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Site</button>
            </div>
          </div>
        </div>
      </div>
      {/*2 blog site */}
      <div className="right card">
        <div className="image">image</div>
        <div className="desc">
          <div>
            <div className="para">
              <h2>Blog Site</h2>
              <p>
                A blog site with two frontends, one for admin to handle the
                content and the other one for viewers. To get the password of
                admin-site please go the github's readme.
              </p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Site</button>
            </div>
          </div>
        </div>
      </div>
      {/*3 inventory application */}
      <div className="left card">
        <div className="image">
          <img src={shoppingapp} alt="shoppingapp" />
        </div>
        <div className="desc">
          <div>
            <div className="para">
              <h2>Inventory Application</h2>
              <p>
                A inventory application with server side rendering using PUG.
                This app lets users to create different categories for their
                items.
              </p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Site</button>
            </div>
          </div>
        </div>
      </div>
      {/*4 shopping app */}
      <div className="left card">
        <div className="image item-7">
          <img src={shoppingapp} alt="shoppingapp" />
        </div>
        <div className="desc item-8">
          <div>
            <div className="para">
              <h2>Shopping App</h2>
              <p>A shopping app with 'show detail' and 'add-cart' options.</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Shopping app</button>
            </div>
          </div>
        </div>
      </div>

      {/*5 to-do */}
      <div className="right card">
        <div className="image item-9">
          <img src={shoppingapp} alt="shoppingapp" />
        </div>
        <div className="desc item-10">
          <div>
            <div className="para">
              <h2>To-do</h2>
              <p>
                My first react app where I used function components I learnt
                from Dev Ed's youtube tutorial. This is a simple to-do app where
                the tasks are stored in local-storage so they won't be lost even
                if the user closes the browser.
              </p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Shopping app</button>
            </div>
          </div>
        </div>
      </div>
      {/*6 tic-tac-toe */}
      <div className="left card">
        <div className="image item-11">
          <img src={shoppingapp} alt="shoppingapp" />
        </div>
        <div className="desc item-12">
          <div>
            <div className="para">
              <h2>Tic-tac-toe</h2>
              <p>
                My first react app I learn from React docs. This app is made
                using class components. It is a classic tic-tac-toe game.
              </p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Shopping app</button>
            </div>
          </div>
        </div>
      </div>
      {/*7 library app */}
      <div className="right card">
        <div className="image item-13">
          <img src={shoppingapp} alt="shoppingapp" />
        </div>
        <div className="desc item-14">
          <div>
            <div className="para">
              <h2>Library App</h2>
              <p>
                My first Nodejs project I learn from MDN docs. This app allows
                users to manage the catalog of a local library.
              </p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Shopping app</button>
            </div>
          </div>
        </div>
      </div>
      {/*8 Etch a sketch */}
      <div className="left card">
        <div className="image item-15">
          <img src={shoppingapp} alt="shoppingapp" />
        </div>
        <div className="desc item-16">
          <div>
            <div className="para">
              <h2>Etch A Sketch</h2>
              <p>
                The classic Etch A Sketch game made using javascript events.
              </p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Shopping app</button>
            </div>
          </div>
        </div>
      </div>

      {/* technical documentation page */}
      <div className="card">
        <div className="image item-17">
          <img src={shoppingapp} alt="shoppingapp" />
        </div>
        <div className="desc item-18">
          <div>
            <div className="para">
              <h2>Technical documentation page</h2>
              <p>Single page html website</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Shopping app</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
