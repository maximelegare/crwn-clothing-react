
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from 'react-redux'
import { directorySections } from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect'

const Directory = ({sections}) => (
  <div className="directory-menu">
        {sections.map(({id, ...otherSectionProps }) => (
          <MenuItem  key={id} {...otherSectionProps} />
        ))}
      </div>
)



const mapStateToProps = createStructuredSelector ({
sections: directorySections
}) 

export default connect(mapStateToProps)(Directory);
