import { PiGraph } from 'react-icons/pi'

export const Logo = () => {
  return (
    <div>
      <h1 className="font-semibold text-3xl flex items-center">
        <PiGraph className="text-primary w-10 h-10" />
        <span className="text-primary">A</span>urora
      </h1>
    </div>
  )
}
