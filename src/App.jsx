import * as React from 'react';
import './style.less';
import './avatar.css';
import './border.css';
import './text.css';

const MaskCompt = React.memo(() => {
  return (
    <div className="demo-box">
      <div className="img" />
      <div className="img demo1" />
      <div className="img demo2" />
      <div className="img demo3" />
      <div className="img demo4" />
      <div className="img demo5" />
      <div className="img demo6" />
      <div className="img demo7" />
      <div className="img demo8" />
      <h3 className="t1">less中变量调用</h3>
    </div>
  );
});

const AvatarCompt = React.memo(() => {
  return (
    <div className="demo-box">
      {/* <img
        src="https://assets.codepen.io/1480814/av+1.png"
        alt="Adam argyle"
        className="test"
      /> */}
      <img
        src="https://assets.codepen.io/1480814/adam-argyle.png"
        alt="Adam argyle"
        className="avatar"
      />
      {/* <img
        src="https://assets.codepen.io/1480814/ahmed.png"
        alt="Ahmed shadeed"
        className="avatar"
        style={{
          '--c': '#efac27',
          '--cb': '#bbdeea',
        }}
      />
      <img
        src="https://assets.codepen.io/1480814/kevin-p.png"
        alt="Kevin Powell"
        style={{
          '--c': '#255b98',
          '--cb': '#f3bf99',
        }}
        className="avatar"
      /> */}
    </div>
  );
});

const BorderCompt = React.memo(() => {
  return (
    <>
      <div className="demo-box">
        <div class="box first"></div>
        <div class="box second"></div>
        <div class="box third"></div>
        <div class="box fourth"></div>
        <div class="box b5"></div>
        <div class="box b6"></div>
      </div>
      <h1>切一个角</h1>
      <div className="demo-box">
        <div class="box b7">1</div>
        <div class="box b8">2</div>
      </div>
      <h1>180deg切角</h1>
      <div className="demo-box">
        <div class="box b9">1</div>
        <div class="box b10">2</div>
        <div class="box b11">3</div>
      </div>
    </>
  );
});

const TextCompt = React.memo(() => {
  return (
    <>
      <p>示例1</p>
      <div className="demo-box">
        <h3 class="hover">Hover Me</h3>
        <h3 class="hover-1">Hover Me</h3>
        <h3 class="hover-2">Hover Me</h3>
        <h3 class="hover-3">Hover Me</h3>
        <h3 class="hover-4">Hover Me</h3>
      </div>
      <hr />
      <p>示例2</p>
      <div className="demo-box">
        <div class="t2 inverted-1">1. Hover me </div>
        <div class="t2 inverted-2">2. Hover me </div>
        <div class="t2 inverted-3">3. Hover me </div>
        <div class="t2 inverted-4">4. Hover me </div>
        <div class="t2 inverted-5">5. Hover me </div>
        <div class="t2 inverted-6">6. Hover me </div>
        <div class="t2 inverted-7">7. Hover me </div>
        <div class="t2 inverted-8">8. Hover me </div>
      </div>
      <hr />
      <p>示例3</p>
      <div className="demo-box">
        <div class="t3 inverted-1">9. Hover me </div>
        <div class="t3 inverted-2">10. Hover me </div>
        <div class="t3 inverted-3">11. Hover me </div>
        <div class="t3 inverted-4">12. Hover me </div>
        <div class="t3 inverted-5">13. Hover me </div>
        <div class="t3 inverted-6">14. Hover me </div>
        <div class="t3 inverted-7">15. Hover me </div>
        <div class="t3 inverted-8">16. Hover me </div>
      </div>
      <hr />
      <p>示例4</p>
      <div className="demo-box">
        <div class="t4 inverted-1">17. Hover me </div>
        <div class="t4 inverted-2">18. Hover me </div>
        <div class="t4 inverted-3">19. Hover me </div>
        <div class="t4 inverted-4">20. Hover me </div>
        <div class="t4 inverted-5">21. Hover me </div>
        <div class="t4 inverted-6">22. Hover me </div>
        <div class="t4 inverted-7">23. Hover me </div>
        <div class="t4 inverted-8">24. Hover me </div>
      </div>
    </>
  );
});
const tabList = [
  {
    title: 'mask示例',
    key: 'mask',
    renderCompt: (props) => <MaskCompt {...props} />,
  },
  {
    title: 'hover头像',
    key: 'avatar',
    renderCompt: (props) => <AvatarCompt {...props} />,
  },
  {
    title: '自定义边框',
    key: 'border',
    renderCompt: (props) => <BorderCompt {...props} />,
  },
  {
    title: '文字hover',
    key: 'text',
    renderCompt: (props) => <TextCompt {...props} />,
  },
];

export default function App() {
  const [item, setItem] = React.useState(tabList[0]);
  return (
    <>
      <div className="tabs">
        {tabList.map((v) => (
          <div
            key={v.key}
            onClick={() => setItem(v)}
            className={item.key === v.key ? 'selected' : ''}
          >
            {v.title}
          </div>
        ))}
      </div>
      {item.renderCompt()}
    </>
  );
}
