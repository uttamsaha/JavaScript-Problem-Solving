const ob = [];
            ob[0] = 6;
            ob[1] = 11;
            ob[2] = 2;
            ob[3] = 0;
            ob[4] = 1;
            ob[5] = 6;
            ob[6] = 16;
            ob[7] = 6;
            ob[8] = 6;
            ob[9] = 3;

            let sum = 0;
            for(let i = 0; i < ob.length; i++){
                const num = ob[i];
                sum += num;
            }
            document.getElementById('array').innerText = `Array contains: ${ob}`

            const avg = sum / ob.length;
            document.getElementById('result').innerText = `Average value of the array is: ${avg}`;
