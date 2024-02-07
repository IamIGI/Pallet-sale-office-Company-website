import Image from 'next/image';
import classes from './tile.module.scss';

interface TileComponent {
  icons: any[];
  index: number;
  text: string;
}

export default function Tile({ icons, index, text }: TileComponent) {
  return (
    <div className={classes.tile}>
      <div className={classes.tileBackground}>
        <div className={classes.iconWrapper}>
          <Image src={icons[index]} alt={text} fill />
        </div>
      </div>
      <h3 dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
