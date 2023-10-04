import React from "react";
import "./SassExample.scss";
const SassExample = () => {
  return (
    <div className="SassExample">
      <br />
      <div className="sass-example ex-1">
        <h3>Variables ($) and Scope</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          adipisci!
        </p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          deleniti ratione error maxime corporis earum!
        </span>
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
          tempora magni pariatur saepe doloribus accusantium ullam officia
          deleniti tenetur repellendus!
        </h5>
      </div>
      <br />
      <hr />
      <div className="sass-example ex-2">
        <h3>Nesting</h3>
        <h4>Nesting Rules</h4>
        <nav>
          <ul>
            <li>
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
            <li>
              <a href="#">SASS</a>
            </li>
          </ul>
        </nav>
        <h4>Nested Properties</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          iusto repellendus. Esse, dignissimos. Saepe ipsa reprehenderit harum!
          Dicta aliquid expedita repudiandae modi nobis maxime inventore
          necessitatibus assumenda, harum hic perferendis.
        </p>
      </div>
      <br />
      <hr />
      <div className="sass-example ex-3">
        <h3>Partial Files (_underscore)</h3>
        <ul>
          <li>
            Files starts with underscore ( _ ) with an extension (.scss) are
            called partials or partial files in sass
          </li>
          <li>
            The difference between normal and partial file is that the partial
            file is not be converted into a css file while the other normal sass
            files are converted to css files at runtime
          </li>
        </ul>
      </div>

      <br />
      <hr />
      <div className="sass-example ex-4">
        <h3>Mixin (@mixin)</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates at
          modi mollitia autem quaerat facere nisi, numquam itaque provident quos
          ex cupiditate. Tempora dolores et non in obcaecati molestiae sed!
        </p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
          placeat tempore nostrum iure aliquam consequuntur laudantium dolorum,
          non, veritatis sint sequi similique! Fuga odit quos placeat. Ratione,
          accusamus aliquam? Quia.
        </span>
      </div>
      <br />
      <hr />
      <div className="sass-example ex-5">
        <h3>Extend (@extend)</h3>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque hic
          beatae a dolorem! Deleniti, adipisci optio. Eum saepe rem eaque quas
          iste, ducimus nemo. Optio nobis deserunt beatae vel pariatur?
        </p>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
          natus nemo non asperiores soluta mollitia reiciendis culpa sed quam
          voluptate atque itaque cupiditate, architecto necessitatibus at esse,
          exercitationem a. Harum.
        </span>
      </div>
    </div>
  );
};

export default SassExample;
