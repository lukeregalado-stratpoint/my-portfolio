export default function ContactLoading() {
  return (
    <main className="min-h-screen pt-14 flex items-center justify-center bg-parchment">
      <div className="relative w-237.75 max-w-full mx-auto py-24 animate-pulse">

        <div className="flex items-stretch rounded-2xl overflow-hidden" style={{ height: "722px" }}>

          {/* Left: message body */}
          <div
            className="p-6 flex flex-col justify-end"
            style={{ width: "481px", flexShrink: 0 }}
          >
            <div
              className="w-full rounded-xl bg-bone/50"
              style={{ height: "calc(722px * 0.75)" }}
            />
          </div>

          {/* Right: credentials */}
          <div
            className="p-6 flex flex-col justify-start gap-7"
            style={{
              width: "462px",
              flexShrink: 0,
              paddingLeft: "170px",
              paddingTop: "calc(722px * 0.43)",
            }}
          >
            {/* Email display */}
            <div className="h-5 w-[200px] rounded-full bg-[#D9C9A8]/40" />
            {/* Name input */}
            <div className="rounded-xl bg-bone/50" style={{ height: "57px", width: "250px" }} />
            {/* Email input */}
            <div className="rounded-xl bg-bone/50" style={{ height: "40px", width: "250px" }} />
          </div>

        </div>

        {/* Submit button */}
        <div className="mt-6 h-11 w-full rounded-xl bg-sage/10" />

      </div>
    </main>
  );
}