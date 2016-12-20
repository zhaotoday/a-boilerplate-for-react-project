import combineReducers from 'redux/lib/combineReducers'
import articles from './articles'
import article from './article'
import files from './files'
import file from './file'
import categories from './categories'
import category from './category'
import commodities from './commodities'
import commodity from './commodity'
import jobs from './jobs'
import job from './job'
import setting from './setting'

export default combineReducers({
  articles,
  article,
  files,
  file,
  categories,
  category,
  commodities,
  commodity,
  jobs,
  job,
  setting
})
