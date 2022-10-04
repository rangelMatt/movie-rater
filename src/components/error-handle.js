// import {ErrorBoundary} from 'react-error-boundary'
// import Auth from './auth'

function ErrorFallback() {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      console.log(Error Fall Back)
    </div>
  )
}

export default ErrorFallback