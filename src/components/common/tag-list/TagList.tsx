
import TagLabel from '@/models/TagLabel';
import Tag from './tag/Tag';
import styles from './TagList.module.css';

interface TagListProps {
  tagList: Array<TagLabel>;
}

export default function TagList(props: TagListProps) {
  return (
    <ol className={styles.tagList}>
      {
        props.tagList.map(tagLabel => (
          <li key={tagLabel}>
            <Tag text={tagLabel} />
          </li>
        ))
      }
    </ol>
  );
}