import React, { useRef } from 'react';
import Cat from './Cat';

export default function CatParent() {
  console.log('부모 컴포넌트 CatParent');

  const catRef = useRef();

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat a={'a'} ref={catRef} />
      </div>
    </div>
  );
}
