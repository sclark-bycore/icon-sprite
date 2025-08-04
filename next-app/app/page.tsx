import {
  ArrowRight,
  AArrowDown,
  AArrowUp,
  ALargeSmall,
  Accessibility,
  Activity,
  AlarmClockCheck,
  AlarmClock,
  AlarmClockMinus,
  AlarmClockOff,
  AlarmClockPlus,
  AlarmSmoke,
  Album,
  AlignCenterHorizontal,
} from "@react-zero-ui/svg-sprite"

const iconNames = [AArrowDown, AArrowUp, ALargeSmall, Accessibility, Activity]

const Home: React.FC = () => {
  return (
    <div className="flex-center py-40 text-8xl font-black uppercase">
      NEXT.js Starter
      <ArrowRight className="h-20 w-20" />
      <button className="flex gap-2 **:rounded-lg **:bg-blue-500 **:text-white">
        {/*  */}
        {iconNames.map((icon, index) => {
          const Icon = icon
          return <Icon key={index + `${icon}`} className="h-20 w-20" />
        })}
        <hr />
        <div className="border border-red-500">
          <AlarmClockCheck size={200} />
        </div>
        <br />
        <AlarmClockMinus size={200} className="h-20 w-20" />
        <AlarmClockOff className="h-20 w-20" />
        <AlarmClockPlus className="h-20 w-20" />
        <AlarmClock className="h-20 w-20" />
        <AlarmSmoke size={200} />
        <Album className="h-20 w-20" />
        <AlignCenterHorizontal className="h-20 w-20" />
        Contact
      </button>
    </div>
  )
}
export default Home
