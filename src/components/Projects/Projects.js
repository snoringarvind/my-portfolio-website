import React, { useEffect, useState } from "react";
import "./Projects.css";
import shopping_mob from "../../shopping_mob.png";
import shopping_desk from "../../shopping_desk.png";
import facebook_mob from "../../facebook_mob.png";
import facebook_desk from "../../facebook_desk.png";
import blog_mob from "../../blog_mob.png";
import blog_desk from "../../blog_desk.png";
import inventory_mob from "../../inventory_mob.png";
import inventory_desk from "../../inventory_desk.png";
import tic_tac from "../../tic-tac.png";
import etch_mob from "../../etch_mob.png";
import etch_desk from "../../etch_desk.png";
import tech_mob from "../../tech_mob.png";
import tech_desk from "../../tech_desk.png";
import todo_desk from "../../todo_desk.png";
import todo_mob from "../../todo_mob.png";

const Project = () => {
  return (
    <div className="Project">
      <div className="grid-container">
        {/*1 facebook clone */}
        <div className="image item-1">
          <picture>
            <source media="(max-width:600px)" srcSet={facebook_mob} />
            <img src={facebook_desk} alt="facebook" />
          </picture>
        </div>
        <div className="desc item-2">
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
              <a
                href="https://github.com/snoringarvind/odin-book"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://snoringarvind.github.io/odinbook-frontend/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Site</button>
              </a>
            </div>
          </div>
        </div>

        {/*2 blog site */}
        <div className="image item-3">
          <picture>
            <source media="(max-width:600px)" srcSet={blog_mob} />
            <img src={blog_desk} alt="blog" />
          </picture>
        </div>
        <div className="desc item-4">
          <div>
            <div className="para">
              <h2>Blog Site</h2>
              <p>
                A blog site with two frontends, one for admin to handle the
                content and the other one for viewers. To get the link and
                password of admin-site please see the github's readme.
              </p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/snoringarvind/ReactBLOGAPI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://snoringarvind.github.io/arvind-blog-guest/#/blogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Site</button>
              </a>
            </div>
          </div>
        </div>

        {/*3 inventory application */}

        <div className="image item-5">
          <picture>
            <source media="(max-width:600px)" srcSet={inventory_mob} />
            <img src={inventory_desk} alt="inventory" />
          </picture>
        </div>
        <div className="desc item-6">
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
              <a
                href="https://github.com/snoringarvind/inventory-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://inventory12-app.herokuapp.com/catalog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Site</button>
              </a>
            </div>
          </div>
        </div>

        {/*4 shopping app */}
        <div className="image item-7">
          <picture>
            <source media="(max-width:600px)" srcSet={shopping_mob} />
            <img src={shopping_desk} alt="shopping" />
          </picture>
        </div>
        <div className="desc item-8">
          <div>
            <div className="para">
              <h2>Shopping App</h2>
              <p>A shopping app with 'show detail' and 'add-cart' options.</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/snoringarvind/shoppingapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://snoringarvind.github.io/shoppingapp/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Site</button>
              </a>
            </div>
          </div>
        </div>

        <div className="image item-9">
          <picture>
            <source media="(max-width:600px)" srcSet={tech_mob} />
            <img src={tech_desk} alt="documentation" />
          </picture>
        </div>
        <div className="desc item-10">
          <div>
            <div className="para">
              <h2>Technical documentation page</h2>
              <p>Single page html website</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/snoringarvind/techincal-documentation-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://snoringarvind.github.io/techincal-documentation-page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Site</button>
              </a>
            </div>
          </div>
        </div>
        {/*8 Etch a sketch */}
        <div className="image item-11">
          <picture>
            <source media="(max-width:600px)" srcSet={etch_mob} />
            <img src={etch_desk} alt="etch" />
          </picture>
        </div>
        <div className="desc item-12">
          <div>
            <div className="para">
              <h2>Etch A Sketch</h2>
              <p>
                The classic Etch A Sketch game made using javascript events.
              </p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/snoringarvind/Etch-A-Sketch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://snoringarvind.github.io/Etch-A-Sketch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 7 library app
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
        </div> */}

      {/* technical documentation page */}

      {/* follow-ups */}
      <div className="follow-up">
        <h2>Follow-ups</h2>
      </div>
      <div className="grid-container">
        {/* to-do */}
        <div className="image item-1">
          <picture>
            <source media="(max-width:600px)" srcSet={todo_mob} />
            <img src={todo_desk} alt="todo" />
          </picture>
        </div>
        <div className="desc item-2">
          <div>
            <div className="para">
              <h2>To-do</h2>
              <p>
                My first react app where I have used functional components which
                I learnt from Dev Ed's youtube tutorial. This is a simple to-do
                app where the tasks are stored in local-storage so they won't be
                lost even if the user closes the browser.
              </p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/snoringarvind/to-do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://snoringarvind.github.io/to-do/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Site</button>
              </a>
            </div>
          </div>
        </div>

        {/* tic-tac-toe */}
        <div className="image item-3">
          <picture>
            <img src={tic_tac} alt="tic-tac" />
          </picture>
        </div>
        <div className="desc item-4">
          <div>
            <div className="para">
              <h2>Tic-tac-toe</h2>
              <p>
                It is the classic tic-tac-toe game. This is also my first react
                app which I learnt from React docs. This app is made using class
                components.
              </p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/snoringarvind/React-tic-tac-toe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://snoringarvind.github.io/React-tic-tac-toe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
