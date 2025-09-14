import React from "react";
import { Check, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

/**
 * TrustStrategySection — 2-block staggered layout matching the mock
 * - Block A: Left text + bullet list, Right image
 * - Block B: Left image, Right text + two feature rows with small icon chips
 * - Clean, rounded images, generous whitespace
 */
export default function StrategySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      {/* Row 1 */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text left */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Inspiring trust through
            <br />
            results and integrity
          </h2>
          <p className="mt-4 max-w-xl text-gray-600">
            Our marketing team is expert in creating smart strategies that help you grow and connect with
            audiences.
          </p>
          <ul className="mt-6 space-y-3 text-gray-800">
            {[
              "Strategic consulting from top experts",
              "Trusted by startups and global brands",
              "End-to-end marketing solutions",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/5">
                  <Check className="h-4 w-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image right */}
        <div className="justify-self-end">
          {/* Replace with your path */}
          <Image
            src="/images/consulting.jpg"
            alt="Team collaborating around a table"
            className="h-[280px] w-full max-w-[420px] rounded-2xl object-cover shadow-md ring-1 ring-black/5 md:h-[320px]"
            width={420}
            height={320}
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />

      {/* Row 2 */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image left */}
        <div className="justify-self-start">
          <Image
            src="/images/strategy.jpg"
            alt="Presenter discussing analytics with team"
            className="h-[300px] w-full max-w-[560px] rounded-2xl object-cover shadow-md ring-1 ring-black/5 md:h-[340px]"
            width={560}
            height={340}
          />
        </div>

        {/* Text right */}
        <div>
          <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Driving brands forward
            <br />
            with strategy & results
          </h3>
          <p className="mt-4 max-w-xl text-gray-600">
            Our team designs hyper-targeted strategies that don’t just reach audiences, but move them to act
            and engage.
          </p>

          <div className="mt-6 space-y-5">
            <FeatureRow
              icon={<Target className="h-4 w-4" />}
              title="Precision Targeting"
              text="Turn strategies into results."
            />
            <FeatureRow
              icon={<TrendingUp className="h-4 w-4" />}
              title="Scalable Results"
              text="Grow without redesigning."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/5">
        {icon}
      </span>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-600">{text}</div>
      </div>
    </div>
  );
}
