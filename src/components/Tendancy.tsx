
type SousTendance = {
  index: string
  title: string
  description: string
  accent: string
}

export default function Tendancy({
  index,
  title,
  description,
  accent,
}: SousTendance) {


  return (
    <div className="w-full flex justify-center items-center h-82 mt-20 mb-40 ">

      <div
        style={{
          color: "black",
          backdropFilter: "blur(12px)",
          boxShadow: `0 0 70px ${accent}80`
        }}
        className="bg-white border-4 w-2/3 h-full border-purple rounded-4xl px-12 py-10 "
      >
        <div className="flex h-full flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <img src="src\assets\characters\5.svg" className="w-20" />
            <div className="uppercase italic text-lg">Sous-tendance {index} </div>
          </div>
          <div className="flex flex-row items-center gap-12">
            <div className="text-3xl big-text" style={{ color: accent }}>{title}</div>
            <div className="flex flex-row h-full items-center gap-4">
              <span className="bg-lemon p-0.5 h-full" />
              <div >{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
