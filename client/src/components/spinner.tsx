import { SpinnerCircular } from 'spinners-react';

const style = {
  alignSelf: 'baseline',
  width: '100%',
  textAlign: 'center'
}
export default function Spinner(): JSX.Element {
  return (
    <div style={style}>
      <SpinnerCircular color='blue' secondaryColor='#DDD' size={80}/>
    </div>
  )
};
