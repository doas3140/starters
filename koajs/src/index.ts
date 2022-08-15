import {ENV} from '~/env'
import {app} from './app'

app.listen(ENV.PORT, '0.0.0.0', () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${ENV.PORT}`),
)
