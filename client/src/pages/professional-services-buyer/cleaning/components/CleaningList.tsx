import React, {useEffect, useState} from 'react';
import $api from "../../../../lib/http.ts";
import styles from "../CleaningPage.module.scss";

type cleaning = {
    _id: string,
    service_name: string,
    category: string,
    subcategory: string,
    description: string,
    images: string[],
    attributes: {
        wantToGiveProfServicesIn: string,
        dayRentPrice: string,
        amountOfDays: string,
        weeklyRentPrice: string,
        amountOfWeeks: string,
        monthlyRentPrice: string,
        amountOfMonths: string,
        workingHours: string,
        numberOfProfessional: string,
        cleaningMaterial: string,
        cleaningFrequency: string[],
    },
}

export const CleaningList = () => {
    const [cleaning, setCleaning] = useState<cleaning[]>([]);

    async function getCleaning() {
        try {
            const response = await $api.get('/professional-services/category/cleaning');
            setCleaning(response.data); // Обновляем состояние cars данными из ответа сервера
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    }

    useEffect(() => {
        getCleaning();
    }, []);

    return (
        <div>
            {cleaning.map((clean, index) => {
                return (
                    <div key={index} className={styles.item}>
                        <div className={styles.image}>
                            <img src={clean.images[0]} alt="Image"/>
                        </div>
                        <div className={styles.item_text}>
                            <h2 className={styles.item_title}>{clean.service_name}</h2>
                            <div className={styles.item_prices}>
                                <div className={styles.item_price}>${clean.attributes.dayRentPrice}/Day</div>
                                <div className={styles.item_price}>${clean.attributes.weeklyRentPrice}/Week</div>
                                <div className={styles.item_price}>${clean.attributes.monthlyRentPrice}/Month</div>
                            </div>
                            <div className={styles.advantages}>
                            <span className={styles.advantage}>
                                Luxury Limousine Selectiont
                            </span>
                                <span className={styles.advantage}>
                                    High Safety and Nurity
                                </span>
                                <span className={styles.advantage}>
                      Fixed Price & Bonus System
                    </span>
                                <span className={styles.advantage}>
                      100% Luxurious Fleet
                    </span>
                                <span className={styles.advantage}>
                      Clean, Polite & Knowledgeable
                    </span>
                                <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                            </div>
                        </div>
                        <div className={styles.total}>
                            <div className={styles.total_price}>
                                <h3>Total Rental Price</h3>
                                <p>Incl.taxes</p>
                                <span>{(Number(clean.attributes.dayRentPrice) + Number(clean.attributes.weeklyRentPrice) + Number(clean.attributes.monthlyRentPrice)) / 3}</span>
                            </div>
                            <button>Reserve</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}