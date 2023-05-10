import { Button, CheckBox } from '@ceos-fe/ui';
import { useState } from 'react';

export default function Home() {
  /* check box */
  const [checked, setChecked] = useState<any>([
    { id: 0, checked: false, value: 'id=0' },
    { id: 1, checked: false, value: 'id=1' },
    { id: 2, checked: false, value: 'id=2' },
    { id: 3, checked: false, value: 'id=3' },
    { id: 4, checked: false, value: 'id=4' },
  ]);
  const onClick = (index: number) => {
    checked[index].checked = !checked[index].checked;
    setChecked([...checked]);
  };

  return (
    <>
      <div>
        ceos
        <Button />
        {/* checkbox */}
        {checked.map((id: any, index: number) => {
          return (
            <CheckBox
              checked={id.checked}
              onClick={() => onClick(index)}
              value={id.value}
              type="column"
            />
          );
        })}
      </div>
    </>
  );
}
