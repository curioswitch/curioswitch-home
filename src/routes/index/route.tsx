import { createFileRoute } from "@tanstack/react-router";
import type { IconType } from "react-icons";
import {
  MdAccessibility,
  MdArrowDropDownCircle,
  MdSearch,
  MdWeb,
} from "react-icons/md";

import { m } from "../../paraglide/messages";

export const Route = createFileRoute("/")({ component: Home });

function ServiceListItem({ service }: { service: string }) {
  return (
    <li>
      <a href="/" className="flex items-center gap-2">
        <MdArrowDropDownCircle className="-rotate-90" />
        <div>{service}</div>
      </a>
    </li>
  );
}

function ServiceList({
  Icon,
  category,
  services,
}: {
  Icon: IconType;
  category: string;
  services: string[];
}) {
  return (
    <div className="flex-1/3 flex flex-col gap-4">
      <Icon size={40} />
      <h2 className="text-xl">{category}</h2>
      <ul>
        {services.map((svc) => (
          <ServiceListItem key={svc} service={svc} />
        ))}
      </ul>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-orange-400 min-h-screen w-screen">
      <div className="bg-white h-70 md:h-140 rounded-bl-4xl px-20 flex flex-col justify-end pb-20">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-medium">
            Bring curiosity
            <br />
            into everyday life.
          </h1>
          <p className="text-gray-500">{m.home_hero_subtitle()}</p>
        </div>
      </div>
      <div className="mt-100 bg-white rounded-tl-4xl">
        <div className="flex justify-center">
          <div className="flex w-8/12 py-16">
            <ServiceList
              category="企画・戦略"
              Icon={MdWeb}
              services={["企画・戦略"]}
            />
            <ServiceList
              category="UIUXデザイン"
              Icon={MdSearch}
              services={["ユーザーテスト", "プロトタイピング", "UIUXデザイン"]}
            />
            <ServiceList
              category="Webエンジニアリング"
              Icon={MdAccessibility}
              services={[
                "エンジニアリング",
                "オープンソースプロジェクト",
                "UIUXデザイン",
              ]}
            />
          </div>
        </div>
        <div className="border-t border-gray-200 p-20">
          <h2 className="text-3xl font-bold">{m.home_works()}</h2>
        </div>
        <div className="border-t border-gray-200 p-20">
          <h2 className="text-3xl font-bold mb-10">サービス</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                className="w-full h-full"
                src="https://placehold.jp/600x400.png"
              />
            </div>
            <div>
              <h3>Studio事業</h3>
              <p>
                食・バイオ・医療分野、生物多様性など、人や環境に良い影響を与える研究開発機関と共に、
                先端技術の社会実装を目指します。サービスの企画・設計・開発を一貫して行い、
                研究成果が社会に届く“使われ続ける”プロダクトを生み出します。
              </p>
            </div>
            <div className="md:col-start-2">
              <img
                className="w-full h-full"
                src="https://placehold.jp/600x400.png"
              />
            </div>
            <div className="md:col-start-1 md:row-start-2">
              <h3>CreativeLab事業</h3>
              <p>
                テクノロジーとデザインの融合から生まれる、自社サービスを開発しています。
                <br />
                音声対話クッキングサービス「COOPii（クッピー）」では、食卓から健康を支えることをビジョンに掲げ、
                日常の“ごはんづくり”をもっと楽しい体験へと変えています。
              </p>
            </div>
            <div>
              <img
                className="w-full h-full"
                src="https://placehold.jp/600x400.png"
              />
            </div>
            <div>
              <h3>デザイン展示会事業</h3>
              <p>
                デザインとテクノロジーの力で、従来の枠を超えた展示体験を創出します。
                <br />
                視覚的な美しさと、デジタル技術で深い没入感を生み出し、来場者の記憶に残る体験としてお届けします。
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="border-t border-gray-200 p-20">
            <h2 className="text-3xl font-bold mb-10">できること</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                <img
                  className="w-full block"
                  src="https://placehold.jp/600x307.png"
                />
                <h3 className="text-lg p-8">企画・戦略</h3>
              </div>
              <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                <img
                  className="w-full block"
                  src="https://placehold.jp/600x307.png"
                />
                <h3 className="text-lg p-8">プロトタイピング</h3>
              </div>
              <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                <img
                  className="w-full block"
                  src="https://placehold.jp/600x307.png"
                />
                <h3 className="text-lg p-8">プロトタイピング</h3>
              </div>
              <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                <img
                  className="w-full block"
                  src="https://placehold.jp/600x307.png"
                />
                <h3 className="text-lg p-8">プロトタイピング</h3>
              </div>
              <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                <img
                  className="w-full block"
                  src="https://placehold.jp/600x307.png"
                />
                <h3 className="text-lg p-8">プロトタイピング</h3>
              </div>
              <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                <img
                  className="w-full block"
                  src="https://placehold.jp/600x307.png"
                />
                <h3 className="text-lg p-8">プロトタイピング</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 rounded-xl lg:rounded-none lg:rounded-tr-4xl overflow-hidden">
            <img
              className="w-full block"
              src="https://placehold.jp/600x400.png"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-10">わたしたちについて</h2>
            <p>
              わたしたちは、テクノロジーとデザインの力で、
              <br />
              日常にワクワクを届けるクリエイティブチームです。
              <br />
              食・バイオ・医療、生物多様性などの研究機関と共に、
              <br />
              真の意味で人類、そして未来の環境のためになるプロダクトを創出します。
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-20">
          <h2 className="text-3xl font-bold">お知らせ</h2>
          <ul>
            <li>東京科学大学でデザイン思考の講義をしました</li>
            <li>東京科学大学でエンジニアリングの講義をしました</li>
            <li>HPを公開しました！</li>
          </ul>
        </div>

        <div className="bg-cyan-300 p-20">
          <h3 className="text-xl font-semibold">お問い合わせ・ご相談</h3>
          <p>
            サービスに関するご質問や、お見積りのご依頼など、まずはお気軽にご相談ください。
          </p>
        </div>
      </div>
    </div>
  );
}
