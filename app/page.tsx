import { ArrowRight as Icon } from "@svg-sprite"

// const iconNames: IconName[] = ["AArrowDown", "AArrowUp", "ALargeSmall", "Accessibility", "Activity"]

const Home: React.FC = () => {
  return (
    <div className="flex-center py-40 text-8xl font-black uppercase">
      NEXT.js Starter
      <Icon className="h-20 w-20" />
      <button className="flex gap-2 **:rounded-lg **:bg-blue-500 **:text-white">
        {/*  */}
        {/* {iconNames.map((name) => (
          <Icon key={name} name={name} className="h-20 w-20" />
        ))} */}
        <hr />
        {/* <Icon name="ArrowDown" className="h-20 w-20" />
        <Icon name="ArrowUp" className="h-20 w-20" />
        <Icon name="ArrowUpLeft" className="h-20 w-20" />
        <Icon name="ArrowUpRight" className="h-20 w-20" />
        <Icon name="ArrowDownLeft" className="h-20 w-20" />
        <Icon name="ArrowDownRight" className="h-20 w-20" />
        <Icon name="ArrowLeft" className="h-20 w-20" />
        <Icon name="ArrowRight" className="h-20 w-20" />
        <Icon name="Clock" className="h-20 w-20" />
        <Icon name="Clock1" className="h-20 w-20" />
        <Icon name="Clock10" className="h-20 w-20" />
        <Icon name="Clock11" className="h-20 w-20" />
        <Icon name="Mail" className="h-20 w-20" />
        <Icon name="Figma" className="h-20 w-20" /> */}
        Contact
      </button>
    </div>
  )
}
export default Home
