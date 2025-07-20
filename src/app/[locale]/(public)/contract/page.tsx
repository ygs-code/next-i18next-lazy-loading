import { getTranslations } from '@/i18n';
 
import Image from 'next/image';
 

export default async function Page() {
                      // 参数是 json 文件的路径
    const {t} = await getTranslations(['zh']);
    // const {t} = await getTranslations('zh.Pages.Contract');

    console.log('getTranslations',getTranslations);
    console.log('t', t);

    return (
        <main>
            {/* pc & pad */}
            <div className="hidden md:block">
                <div className="m-auto flex items-center justify-center gap-2 bg-[#F5F7FA] px-32 py-10">
                    <div className="flex items-stretch justify-center gap-5">
                        {[1, 2, 3, 4, 5].map((index) => {
                            return (
                                <div key={index} className="flex-1 rounded-sm bg-white px-5 pb-20 pt-10 text-center">
                                    {/* <Image
                                        src={`${process.env.NEXT_PUBLIC_STATIC_URL}/img/contract/img${index}.png`}
                                        width={64}
                                        height={64}
                                        alt="img"
                                        className="m-auto"
                                    /> */}
                                    <div className="mb-2 mt-5 text-[18px]">{t(`Pages.Contract.it${index}Title` as 'it1Title')}</div>
                                    <div className="text-[14px]">{t(`it${index}des1` as 'it1des1')}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* H5 */}
            <div className="md:hidden">
                <div className="bg-[#F5F7FA] px-2 py-5">
                    {[1, 2, 3, 4, 5].map((index) => {
                        return (
                            <div key={index} className="mb-2 rounded-sm bg-white p-4">
                                <div className="mb-2 flex items-center justify-start gap-2">
                                    {/* <Image
                                        src={`${process.env.NEXT_PUBLIC_STATIC_URL}/img/contract/img${index}.png`}
                                        width={32}
                                        height={32}
                                        alt="img"
                                        className=""
                                    /> */}
                                    <div className="text-[18px]">{t(`Pages.Contract.it${index}Title` as 'it1Title')}</div>
                                </div>
                                <div className="text-[14px]">{t(`it${index}des1` as 'it1des1')}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="px-[24px] py-[30px] pb-0 text-[14px] md:px-[166px]">
                <div className="text-[32px]">{t('title')}</div>
                <table className="my-2 w-full border-collapse border border-[#DEDEDF] text-[12px] text-[#49505E]">
                    <thead className="text-[12px] md:text-[14px]">
                        <tr className="bg-[#F5F7FA]">
                            <th className="border border-[#DEDEDF] p-2 text-left">{t('th1')}</th>
                            <th className="border border-[#DEDEDF] p-2 text-center">{t('th2')}</th>
                            <th className="border border-[#DEDEDF] p-2 text-center">{t('th3')}</th>

                            <th className="border border-[#DEDEDF] p-2 text-center">HKGHKD</th>
                            <th className="border border-[#DEDEDF] p-2 text-center">XAUCNH</th>
                        </tr>
                    </thead>
                    <tbody className="text-[12px] md:text-[14px]">
                        <tr>
                            <td className="border border-[#DEDEDF] p-2">{t('td1_1')}</td>
                            <td className="border border-[#DEDEDF] p-2 text-center">{t('td1_2')}</td>
                            <td className="border border-[#DEDEDF] p-2 text-center">{t('td1_3')}</td>

                            <td className="border border-[#DEDEDF] p-2 text-center">{t('td1_4')}</td>
                            <td className="border border-[#DEDEDF] p-2 text-center">{t('td1_5')}</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap border border-[#DEDEDF] p-2">{t('td2_1')}</td>
                            <td className="border border-[#DEDEDF] p-2 text-center" colSpan={4}>
                                {t('td2_2')}
                            </td>
                        </tr>
                        {/* <tr>
              <td className="border border-[#DEDEDF] p-2">{t('td3_1')}</td>
              <td className="border border-[#DEDEDF] p-2 text-center" colSpan={4}>{t('td3_2')}</td>
            </tr> */}
                        <tr>
                            <td className="border border-[#DEDEDF] p-2">{t('td4_1')}</td>
                            <td className="border border-[#DEDEDF] p-2 text-center" colSpan={4}>
                                {t('td4_2')}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-[#DEDEDF] p-2">{t('td5_1')}</td>
                            <td className="border border-[#DEDEDF] p-2 text-center" colSpan={4}>
                                {t('td5_2')}
                            </td>
                        </tr>
                        {/* <tr>
              <td className="border border-[#DEDEDF] p-2">{t('td6_1')}</td>
              <td className="border border-[#DEDEDF] p-2 text-center" colSpan={2}>{t('td6_2')}</td>
            </tr> */}
                        <tr>
                            <td className="border border-[#DEDEDF] p-2">{t('td7_1')}</td>
                            <td className="border border-[#DEDEDF] p-2 text-center" colSpan={4}>
                                {t('td7_2_1')}
                                <br />
                                {t('td7_2_2')}
                                <br />
                                {t('td7_2_3')}
                                <br />
                                {t('td7_2_4')}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-[#DEDEDF] p-2">{t('td8_1')}</td>
                            <td className="border border-[#DEDEDF] p-2 text-center" colSpan={4}>
                                {t('td8_2_1')}
                                <br />
                                {t('td8_2_2')}
                                <br />
                                {t('td8_2_3')}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-[14px] text-[#979797]">{t('tableDesc')}</div>
            </div>
          
        </main>
    );
}
