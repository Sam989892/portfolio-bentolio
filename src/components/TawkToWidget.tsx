'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API?: any
    Tawk_LoadStart?: Date
  }
}

export default function TawkToWidget() {
  useEffect(() => {
    // Initialize Tawk_API and Tawk_LoadStart if not already defined
    if (typeof window !== 'undefined') {
      window.Tawk_API = window.Tawk_API || {}
      window.Tawk_LoadStart = new Date()

      // Create and append the Tawk.to script
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://embed.tawk.to/68a81315a4fc79192a7ce8ab/1j388l3s7'
      script.charset = 'UTF-8'
      script.setAttribute('crossorigin', '*')
      
      // Find the first script tag and insert before it
      const firstScript = document.getElementsByTagName('script')[0]
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript)
      }

      // Cleanup function
      return () => {
        // Remove the script when component unmounts
        const tawkScript = document.querySelector('script[src*="tawk.to"]')
        if (tawkScript && tawkScript.parentNode) {
          tawkScript.parentNode.removeChild(tawkScript)
        }
      }
    }
  }, [])

  return null // This component doesn't render anything visible
}