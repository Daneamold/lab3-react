import { useState } from 'react'

export function useRouter(initialRoute = '/') {
  const [currentRoute, setCurrentRoute] = useState(initialRoute)

  const navigate = (route) => {
    setCurrentRoute(route)
  }

  return { currentRoute, navigate }
}
